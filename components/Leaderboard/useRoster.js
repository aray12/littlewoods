import { useEffect, useReducer } from 'react';
import _ from 'lodash';

import firebase from '../../api/firebase.js';

const getRawScore = pos => {
  if (!pos || pos === '--') {
    return 0;
  }
  return _.toNumber(_.trimStart(pos, 'T'));
};

const populateTeam = (tournament, team) => {
  return team.reduce(
    (accum, playerId) => {
      const player = _.get(tournament, playerId, {});
      const rawScore = getRawScore(player.position);
      let bonus = 0;

      if (rawScore !== 0) {
        if (rawScore === 1) {
          bonus = -20;
        } else if (rawScore <= 5) {
          bonus = -10;
        } else if (rawScore <= 10) {
          bonus = -5;
        }
      }

      accum.players.push({ ...player, rawScore, bonus });

      if (player.status == 'mc') {
        accum.missedCuts++;
      }

      return accum;
    },
    { players: [], missedCuts: 0 }
  );
};

const populateLeaderboard = teams =>
  _.orderBy(
    Object.entries(teams).map(([name, team]) => {
      const missedCutBonus =
        team.missedCuts === 0 ? -10 : team.missedCuts === 1 ? -5 : 0;
      return {
        ...team,
        name,
        total: _.get(team, 'players', []).reduce(
          (accum, player) => accum + player.rawScore + player.bonus,
          missedCutBonus
        ),
      };
    }),
    ['total'],
    ['asc']
  ).map(
    (() => {
      let prevPos;
      return (team, index, arr) => {
        let position = (index + 1).toString();
        if (index === 0 && team.total === arr[1].total) {
          position = 'T1';
        }
        if (index > 0 && index < arr.length - 1) {
          const prevTotal = arr[index - 1].total;
          const nextTotal = arr[index + 1].total;
          if (team.total === prevTotal) {
            position = prevPos;
          } else if (team.total === nextTotal) {
            position = `T${_.toNumber(_.trimStart(prevPos, 'T')) + 1}`;
          }
        } else if (index === arr.length - 1) {
          const prevTotal = arr[index - 1].total;
          if (team.total === prevTotal) {
            position = prevPos;
          }
        }
        prevPos = position;
        return { ...team, position };
      };
    })()
  );

const initialState = { teams: {}, tournament: {}, leaderboard: [] };

const reducer = (state, action) => {
  let teams;
  switch (action.type) {
    case 'TEAMS_UPDATE':
      teams = _.mapValues(action.payload, team =>
        populateTeam(state.tournament, Object.values(team))
      );
      return {
        teams,
        leaderboard: populateLeaderboard(teams),
        tournament: action.payload,
      };

    case 'TOURNAMENT_UPDATE':
      teams = _.mapValues(state.teams, team =>
        populateTeam(action.payload, team.players.map(({ playerId }) => playerId))
      );
      return {
        teams,
        leaderboard: populateLeaderboard(teams),
        tournament: action.payload,
      };

    default:
      throw new Error();
  }
};

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    firebase
      .database()
      .ref('leaderboard')
      .on('value', snapshot => {
        dispatch({ type: 'TOURNAMENT_UPDATE', payload: snapshot.toJSON() });
      });

    firebase
      .database()
      .ref('teams')
      .on('value', snapshot => {
        dispatch({ type: 'TEAMS_UPDATE', payload: snapshot.toJSON() });
      });
  }, []);

  return state;
};

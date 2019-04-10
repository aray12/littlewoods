import { Flipper, Flipped } from 'react-flip-toolkit';
import _ from 'lodash';

import Team from './Team.js';

import useRoster from './useRoster.js';

const Leaderboard = () => {
  const state = useRoster();
  return (
    <React.Fragment>
      <h2>Leaderboard</h2>
      <Flipper flipKey={state.leaderboard.map(({ name }) => name).join('-')}>
        <table>
          <thead>
            <tr>
              <th>Pos</th>
              <th>Team</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {state.leaderboard.map(team => (
              <Flipped key={team.name} flipId={team.name}>
                <tr>
                  <td>{team.position}</td>
                  <td>{team.name}</td>
                  <td>{team.total}</td>
                </tr>
              </Flipped>
            ))}
          </tbody>
        </table>
      </Flipper>
      {Object.entries(state.teams).map(([name, team]) => (
        <Team name={name} team={team} />
      ))}
    </React.Fragment>
  );
};

export default Leaderboard;

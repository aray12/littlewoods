import { useEffect, useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import _ from 'lodash';

import Layout from '../components/Layout/Layout.js';
import firebase from '../api/firebase.js';

const populate = snap =>
  _.flatten(
    _.partition(Object.values(snap), p => p.status === 'active').map(part =>
      _.orderBy(part, [player => _.toNumber(player.total)], ['asc'])
    )
  );

const Tournament = () => {
  const [tournament, setTournament] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref('leaderboard')
      .on('value', snapshot => {
        setTournament(populate(snapshot.toJSON()));
      });
  }, []);
  return (
    <Layout>
      <Flipper flipKey={tournament.map(({ playerId }) => playerId).join('-')}>
        <table>
          <thead>
            <th>Pos</th>
            <th>Name</th>
            <th>Total</th>
            <th>Thru</th>
            <th>Round</th>
          </thead>
          {tournament.map(player => (
            <Flipped key={player.playerId} flipId={player.playerId}>
              <tr>
                <td>
                  {player.status === 'active'
                    ? player.position
                    : player.status.toUpperCase()}
                </td>
                <td>
                  {player.firstName} {player.lastName}
                </td>
                <td>{player.total}</td>
                <td>{player.thru}</td>
                <td>{player.round}</td>
              </tr>
            </Flipped>
          ))}
        </table>
      </Flipper>
    </Layout>
  );
};

export default Tournament;

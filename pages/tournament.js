import { useEffect, useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
      <Paper>
        <Flipper flipKey={tournament.map(({ playerId }) => playerId).join('-')}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Pos</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Thru</TableCell>
                <TableCell align="right">Round</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tournament.map(player => (
                <Flipped key={player.playerId} flipId={player.playerId}>
                  <TableRow>
                    <TableCell align="center">
                      {player.status === 'active'
                        ? player.position
                        : player.status.toUpperCase()}
                    </TableCell>
                    <TableCell>
                      {player.firstName} {player.lastName}
                    </TableCell>
                    <TableCell align="right">{player.total}</TableCell>
                    <TableCell align="right">{player.thru}</TableCell>
                    <TableCell align="right">{player.round}</TableCell>
                  </TableRow>
                </Flipped>
              ))}
            </TableBody>
          </Table>
        </Flipper>
      </Paper>
    </Layout>
  );
};

export default Tournament;

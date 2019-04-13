import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TableCell from '../TableCell/TableCell.js';

const Team = ({ name, team }) => {
  const missedCutBonus =
    team.missedCuts === 0 ? -10 : team.missedCuts === 1 ? -5 : 0;
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        {name}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Player</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Pos</TableCell>
            <TableCell align="right">Bonus</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {_.get(team, 'players', []).map(player => (
            <TableRow>
              <TableCell align="center">
                <a
                  href={`https://www.pgatour.com/players/player.${
                    player.playerId
                  }.${_.kebabCase(
                    [player.firstName, player.lastName].join(' ')
                  )}.html/scorecards/r014`}
                  target="_blank"
                >
                  {player.firstName} {player.lastName}
                </a>
              </TableCell>
              <TableCell align="right">
                {player.total === '0' ? 'E' : player.total}
              </TableCell>
              <TableCell align="right">
                {player.status === 'active'
                  ? player.position
                  : player.status.toUpperCase()}
              </TableCell>
              <TableCell align="right">{player.bonus}</TableCell>
              <TableCell align="right">
                {player.rawScore + player.bonus}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan="2" />
            <TableCell colSpan="3">Made Cut Bonus</TableCell>
            <TableCell align="right">{missedCutBonus}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan="3">
              <strong>Total</strong>
            </TableCell>
            <TableCell align="right">
              <strong>
                {_.get(team, 'players', [])
                  .map(player => player.rawScore + player.bonus)
                  .sort((a, b) => a - b)
                  .filter((score, index) => index < 4)
                  .reduce((accum, score) => accum + score, missedCutBonus)}
              </strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <style jsx>{`
        th,
        td {
          padding: 4px 24px 4px 12px;
        }
      `}</style>
    </div>
  );
};

export default Team;

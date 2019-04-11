import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
            <TableCell>Player</TableCell>
            <TableCell align="right">Pos</TableCell>
            <TableCell align="right">Bonus</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {_.get(team, 'players', []).map(player => (
            <TableRow>
              <TableCell>
                {player.firstName} {player.lastName}
              </TableCell>
              <TableCell align="right">{player.position}</TableCell>
              <TableCell align="right">{player.bonus}</TableCell>
              <TableCell align="right">
                {player.rawScore + player.bonus}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan="2" colSpan="2" />
            <TableCell>Missed Cut Bonus</TableCell>
            <TableCell align="right">{missedCutBonus}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Total</strong>
            </TableCell>
            <TableCell align="right">
              <strong>
                {_.get(team, 'players', []).reduce(
                  (accum, player) => accum + player.rawScore + player.bonus,
                  missedCutBonus
                )}
              </strong>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Team;

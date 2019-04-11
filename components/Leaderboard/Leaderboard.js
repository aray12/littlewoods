import PropTypes from 'prop-types';
import cx from 'classnames';
import { Flipper, Flipped } from 'react-flip-toolkit';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TableCell from '../TableCell/TableCell.js';

import Team from './Team.js';

import useRoster from './useRoster.js';

const styles = theme => ({
  leaderboard: {
    maxWidth: 560,
    margin: 'auto',
  },
  paper: {
    paddingTop: theme.spacing.unit * 2,
  },
  divider: {
    margin: '20px 0',
  },
});

const Leaderboard = ({ classes }) => {
  const state = useRoster();
  return (
    <React.Fragment>
      <Paper className={cx(classes.leaderboard, classes.paper)}>
        <Typography variant="h3" align="center" gutterBottom>
          Leaderboard
        </Typography>
        <Flipper flipKey={state.leaderboard.map(({ name }) => name).join('-')}>
          <Table padding="dense">
            <TableHead>
              <TableRow>
                <TableCell align="center">Pos</TableCell>
                <TableCell>Team</TableCell>
                <TableCell align="right" className="testinggggggg">
                  Score
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.leaderboard.map(team => (
                <Flipped key={team.name} flipId={team.name}>
                  <TableRow>
                    <TableCell align="center">{team.position}</TableCell>
                    <TableCell>{team.name}</TableCell>
                    <TableCell align="right">{team.total}</TableCell>
                  </TableRow>
                </Flipped>
              ))}
            </TableBody>
          </Table>
        </Flipper>
      </Paper>
      <Divider className={classes.divider} />
      <Grid container spacing={24}>
        {Object.entries(state.teams).map(([name, team]) => (
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <Team name={name} team={team} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

Leaderboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Leaderboard);

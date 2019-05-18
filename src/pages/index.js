import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import _ from 'lodash';
import cx from 'classnames';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TableCell from '../components/TableCell/TableCell.js';
import Team from '../components/Team';

import { Source } from '../components/Source';

const getRawScore = player => {
  if (!player) {
    return 0;
  }

  if (player.status !== 'active') {
    return 83;
  }

  if (!player.positionCurrent || player.positionCurrent === '--') {
    return 0;
  }
  return _.toNumber(_.trimStart(player.positionCurrent, 'T'));
};

const populateTeams = (tourny, teams) => {
  return teams.map(team =>
    team.players.reduce(
      (accum, playerId) => {
        const player = _.find(_.get(tourny, 'rows', []), { playerId });
        const rawScore = getRawScore(player);
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

        if (player.status !== 'active') {
          accum.missedCuts++;
        }

        return accum;
      },
      { name: team.name, players: [], missedCuts: 0 }
    )
  );
};

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

const Index = ({ classes, data }) => {
  const source = useContext(Source);

  if (!source || !source.rows) {
    return null;
  }

  const teams = populateTeams(source, data.site.siteMetadata.teams);

  return (
    <React.Fragment>
      <Paper className={cx(classes.leaderboard, classes.paper)}>
        <Typography variant="h3" align="center" gutterBottom>
          Leaderboard
        </Typography>
        <Flipper flipKey={teams.map(({ name }) => name).join('-')}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Pos</TableCell>
                <TableCell>Team</TableCell>
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody> 
              {_.orderBy(
                teams.map(({ name, ...team }) => {
                  const missedCutBonus =
                    team.missedCuts === 0
                      ? -10
                      : team.missedCuts === 1
                      ? -5
                      : 0;
                  return {
                    ...team,
                    name,
                    total: _.get(team, 'players', [])
                      .map(player => player.rawScore + player.bonus)
                      .sort((a, b) => a - b)
                      .filter((score, index) => index < 4)
                      .reduce((accum, score) => accum + score, missedCutBonus),
                  };
                }),
                ['total'],
                ['asc']
              )
                .map(
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
                          position = `T${_.toNumber(_.trimStart(prevPos, 'T')) +
                            1}`;
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
                )
                .map(team => (
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
        {teams.map(team => (
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <Team {...team} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        teams {
          name
          players
        }
      }
    }
  }
`;

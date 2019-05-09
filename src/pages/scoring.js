import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import Layout from '../components/Layout/Layout.js';

const styles = theme => ({
  paper: { padding: 20, maxWidth: 560, margin: "auto" },
});

const Scoring = ({ classes }) => {
  return (
    <Layout>
      <Paper className={classes.paper}>
        <Typography variant="h6">Golfers</Typography>
        <Typography paragraph>
          <ul>
            <li>Keep your best 4 golfers out of 6 (i.e. drop your worst 2)</li>
            <li>
              +1 point for golfer's place on the leaderboard (e.g. 15th place is
              worth +15 points)
            </li>
            <li>Missed cut equals Golfers to Make the cut +1</li>
          </ul>
        </Typography>
        <Typography variant="h6">Cuts Bonus</Typography>
        <Typography paragraph>
          <ul>
            <li>If 6/6 golfers make the cut: -10 pts</li>
            <li>If 5/6 golfers make the cut: -5 pts</li>
          </ul>
        </Typography>
        <Typography variant="h6">Finish Bonus</Typography>
        <Typography paragraph>
          <ul>
            <li>
              Top 10 finish: -5 pts (e.g. 8th place finish is worth +8 - 5 = +3
              )
            </li>
            <li>Top 5 finish: -10 pts</li>
            <li>Top 1 finish: -20 pts</li>
          </ul>
        </Typography>
      </Paper>
    </Layout>
  );
};

export default withStyles(styles)(Scoring);

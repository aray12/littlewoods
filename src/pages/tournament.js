import React, { useContext } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import _ from "lodash";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import TableCell from "../components/TableCell/TableCell.js";
import { Source } from "../components/Source";

const Tournament = () => {
  const data = useContext(Source);

  return (
    <Paper>
      <Flipper
        flipKey={_.get(data, "rows", [])
          .map(({ playerId }) => playerId)
          .join("-")}
      >
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
            {_.get(data, "rows", []).map(player => (
              <Flipped key={player.playerId} flipId={player.playerId}>
                <TableRow>
                  <TableCell align="center">
                    {player.status === "active"
                      ? player.positionCurrent
                      : player.status.toUpperCase()}
                  </TableCell>
                  <TableCell>
                    {player.playerNames.firstName} {player.playerNames.lastName}
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
  );
};

export default Tournament;

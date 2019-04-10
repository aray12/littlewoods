import _ from 'lodash';

const Team = ({ name, team }) => {
  const missedCutBonus =
    team.missedCuts === 0 ? -10 : team.missedCuts === 1 ? -5 : 0;
  return (
    <div>
      <h2>{name}</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Pos</th>
            <th>Bonus</th>
          </tr>
        </thead>
        <tbody>
          {_.get(team, 'players', []).map(player => (
            <tr>
              <td>
                {player.firstName} {player.lastName}
              </td>
              <td>{player.position}</td>
              <td>{player.bonus}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">Missed Cut Bonus</td>
            <td>{missedCutBonus}</td>
          </tr>
          <tr>
            <td colSpan="2">
              <strong>Total</strong>
            </td>
            <td>
              {_.get(team, 'players', []).reduce(
                (accum, player) => accum + player.rawScore + player.bonus,
                missedCutBonus
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Team;

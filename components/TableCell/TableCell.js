import TableCellMU from '@material-ui/core/TableCell';

import { withStyles } from '@material-ui/core/styles';

const TableCell = withStyles(theme => ({
  cell: {
    [theme.breakpoints.down('xs')]: {
      padding: '4px 1px 4px 1px',
    },
  },
}))(({ classes, ...props }) => (
  <TableCellMU className={classes.cell} {...props} />
));

export default TableCell;

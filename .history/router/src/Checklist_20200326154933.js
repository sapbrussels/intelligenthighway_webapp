import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Checkbox } from '@material-ui/core';

// Generate Order Data
function createData(id, check, tasks) {
  return { id, check, tasks };
}

const rows = [
  createData(0, <Checkbox></Checkbox>,'Turn all switches OFF & ON to stop dust build up'),
  createData(1, <Checkbox></Checkbox>,'turn all circuit-breakers OFF and reset'),
  createData(2, <Checkbox></Checkbox>,'Check for high resistance joints'),
  createData(3, <Checkbox></Checkbox>,'clean PE cell faces then cover to test functionnality'),
  createData(4, <Checkbox></Checkbox>,'check MEN and earthing'),
  createData(0, <Checkbox></Checkbox>,'Luminaire cleaning and inspection'),
  createData(1, <Checkbox></Checkbox>,'Inspect for any sign of vermin damage in the cabinet'),
  createData(2, <Checkbox></Checkbox>,'Remove grafitit on cabinet'),
  createData(3, <Checkbox></Checkbox>,'Trim all trees that interfere with solar-panels and light output of lulinaires'),
  createData(4, <Checkbox></Checkbox>,'Check all support structures for their integreties'),
  createData(3, <Checkbox></Checkbox>,'Installation, maintenance and replacement of post indentification label'),
  createData(4, <Checkbox></Checkbox>,'Installation, maintenace and replacement of supply point indentification labels'),
];


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>tasks</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.check}</TableCell>
              <TableCell>{row.tasks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link><button>Finished</button></Link>
      </div>
    </React.Fragment>
  );
}
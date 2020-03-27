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
function createData(id, tasks) {
  return { id, tasks };
}

const rows = [
  createData(0, <Checkbox>Turn all switches OFF & ON to stop dust build up</Checkbox>),
  createData(1, <Checkbox>turn all circuit-breakers OFF and reset</Checkbox>),
  createData(2, <Checkbox>Check for high resistance joints</Checkbox>),
  createData(3, <Checkbox>clean PE cell faces then cover to test functionnality</Checkbox>),
  createData(4, <Checkbox>check MEN and earthing</Checkbox>),
  createData(0, <Checkbox>Luminaire cleaning and inspection</Checkbox>),
  createData(1, <Checkbox>Inspect for any sign of vermin damage in the cabinet</Checkbox>),
  createData(2, <Checkbox>Remove grafitit on cabinet</Checkbox>),
  createData(3, <Checkbox>Trim all trees that interfere with solar-panels and light output of lulinaires</Checkbox>),
  createData(4, <Checkbox>Check all support structures for their integreties</Checkbox>),
  createData(3, <Checkbox>Installation, maintenance and replacement of post indentification label </Checkbox>),
  createData(4, <Checkbox>Installation, maintenace and replacement of supply point indentification labels</Checkbox>),
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
            <TableCell>Date</TableCell>
            <TableCell>tasks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
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
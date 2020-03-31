import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id,Sensorstatus, OutsideTemp, Life) {
  return { id,Sensorstatus, OutsideTemp, Life};
}

const rows = [
    createData(0, 'ON', '14°C', '5000 Hours')
    
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    padding: '30px',
    borderRadius:'10px',
  },
}));

    export default function Jobslist() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <Title>Sensor Data</Title>
        <Table size="small">
            <TableHead>
            <TableRow>
                <TableCell>Sensorstatus</TableCell>
                <TableCell>OutsideTemp</TableCell>
                <TableCell>Life</TableCell>
               
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id}>
                <TableCell>{row.Sensorstatus}</TableCell>
                <TableCell>{row.OutsideTemp}</TableCell>
                <TableCell>{row.Life}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        
        </React.Fragment>
    );
} 
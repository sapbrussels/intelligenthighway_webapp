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
function createData(id, location, job, accept, info) {
  return { id, location, job, accept, info };
}

const rows = [
    createData(0, 'Boulevard Avroy 1.9', 'Maintenance',<Link to="/Maintenance"><button>Accept</button></Link>),
]

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
    padding: '20px',
    borderRadius:'10px',
  },
}));

    export default function Jobslist() {
    const classes = useStyles();
    return (
        <React.Fragment>
        <Title>Community Data</Title>
        <Table size="small">
            <TableHead>
            <TableRow>
                <TableCell>location</TableCell>
                <TableCell>job</TableCell>
                <TableCell>Accept the job</TableCell>
                <TableCell>More info</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id}>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.job}</TableCell>
                <TableCell>{row.accept}</TableCell>
                <TableCell>{row.info}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        <div className={classes.seeMore}>
            <Link color="primary" href="#" onClick={preventDefault}>
            See more orders
            </Link>
        </div>
        </React.Fragment>
    );
} 
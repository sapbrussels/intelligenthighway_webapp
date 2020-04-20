import React, { useState, Fragment } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Rectangle from 'react-rectangle';
import Title from './Title';


var mqtt = require('mqtt');
var options = {
  protocol: 'mqtts',
  mqttUser: 'caonegam',
  mqttPassword: 'LkRI4RXywc0b'
};
var client = mqtt.connect('mqtt:Farmer.cloudmqtt:13365', options);
client.subscribe('Streetlight');

const [mesg] = useState(<Fragment><em>nothing heard</em></Fragment>);
// Generate Order Data
function createData(id, street_light, what, status,light) {
  return { street_light, status, what, light};
}

const rows = [
  createData(0, 'Boulevard Avroy 1.9','Street light', {mesg}, <Rectangle aspectRatio={[1,1]}>
  <div style={{ background: '#008000',  width: '40%', height: '40%' }} />
</Rectangle>),
  createData(2, 'Rue de Londres 2.3','Street light', 'X',<Rectangle aspectRatio={[1,1]}>
  <div style={{ background: '#FF0000', width: '40%', height: '40%' }} />
</Rectangle>),
  createData(2, 'Rue de Londres 2.5','Pothole', 'X',<Rectangle aspectRatio={[1,1]}>
  <div style={{ background: '#FF0000', width: '40%', height: '40%' }} />
</Rectangle>),
];

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

export default function LightStatus() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Highway status</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>working</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.street_light}</TableCell>
              <TableCell> {row.status}</TableCell>
              <TableCell> {row.light}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more 
        </Link>
      </div>
    </React.Fragment>
  );
}
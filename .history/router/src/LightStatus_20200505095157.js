import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Connector } from 'mqtt-react';
import Title from './Title';
import LEDstatus from './LEDstatus';
import PostMessage from './PostMessage';



// Generate Order Data
function createData(id, street_light, status, working,light) {
  return { id, street_light, status, working, light};
}

/*function sendMessage(event) {
  //event.preventDefault();
  //MQTT client is passed on
  const { mqtt } = this.props;
  mqtt.publish('@demo/test', 'My Message');
}  */


const rows = [
  createData(0, 'Boulevard Avroy 1.9',<LEDstatus id='1'/>,'yes'),
  createData(1, 'Rue de Londres 2.3',<LEDstatus id='2'/>,'yes'),
  createData(2, 'Rue de Londres 2.5',<LEDstatus id='3'/>,'no'),
];


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
    <Connector mqttProps={{
      host: "35.195.197.206",
      protocol: "ws",
      clientId: "4ewf6wegwe",
      port: 8080,
      rejectUnauthorized: false,
        path: "/mqtt"
    }}>
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
              <TableCell> {row.working}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <PostMessage/>
      </div>
    </React.Fragment>
    </Connector>
  );
}
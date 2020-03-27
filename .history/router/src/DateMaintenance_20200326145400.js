import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';



const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
 useStyles();
  return (
    <React.Fragment>
      <Title>Info</Title>
      <Typography component="p" variant="h4">
       Location :  Boulevard d'Avroy 1.9
      </Typography>
    </React.Fragment>
  );
}

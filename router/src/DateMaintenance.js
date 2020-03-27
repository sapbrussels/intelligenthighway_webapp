import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles((theme)=>({
 
  paper:{
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignContent:'center',
      },
  },
}));

export default function Deposits() {
const classes = useStyles();
  return (
    <div className={classes.paper}>
    <React.Fragment>
      <Title>Location</Title>
      <Typography>Boulevard d'avroy</Typography>
    </React.Fragment>
    </div>
  );
}
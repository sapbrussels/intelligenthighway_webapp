import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles((theme)=>({
  depositContext: {
    flex: 1,
  },
  paper:{
      marginTop:  theme.spacing(8),
      alignItems:'left',
  },
}));

export default function Deposits() {
const classes = useStyles();
  return (
    <div className={classes.paper}>
    <React.Fragment>
      <Title>Location</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        Boulevard d'Avroy 1.9
      </Typography>
    </React.Fragment>
    </div>
  );
}
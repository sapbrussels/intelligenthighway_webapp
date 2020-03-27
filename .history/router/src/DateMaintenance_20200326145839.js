import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
useStyles();
  return (
    <React.Fragment>
      <Title>Location</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        Boulevard d'Avroy 1.9
      </Typography>
    </React.Fragment>
  );
}
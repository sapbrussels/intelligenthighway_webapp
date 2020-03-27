import React from 'react';
import Title from'./Title';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({
}));


export default function Direction() {
  const classes = useStyles();
    return (
      // Import result is the URL of your image
  <React.Fragment>
  <Title>Maintenance checklist</Title>
  return <img src={"./Direction.png"}alt="Direction" />;
  </React.Fragment>
    );
  }
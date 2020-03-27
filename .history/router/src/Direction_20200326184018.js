import React from 'react';
import Title from'./Title';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({
}));


export default function Direction() {
 useStyles();
    return (
      // Import result is the URL of your image
  <React.Fragment>
  <Title>Your direction</Title>
 <img src={"./Direction.png"}alt="" />
  </React.Fragment>
    );
  }
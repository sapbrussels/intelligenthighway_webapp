import React from 'react';
import Title from'./Title';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({
  width: '73%',
  height: '50%',
  padding: '20px',
  borderRadius:'10px',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 
  theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
  backgroundSize: 'contain',
  backgroundPosition: 'Bottom left', 
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
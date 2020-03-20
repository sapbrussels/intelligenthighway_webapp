import React from 'react';
import './App.css'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url("/streetlights.png/")',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
}));   
export default function SignInSide() {
    const classes = useStyles();
      
    return (
        <img src="/streetlights.png"/>
       
    );
}


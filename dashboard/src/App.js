import React from 'react';

import Paper from '@material-ui/core/Paper';



import Image from './streetlights.png'; // Import using relative path


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

export default class Home extends React.Component{
    render(){
        return(
            <Paper style={styles.paperContainer}>
                Some text to fill the Paper Component
            </Paper>
        )
    }
}
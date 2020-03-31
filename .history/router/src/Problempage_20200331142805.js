import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import Card from '@material-ui/core/Card';
import { Link } from "react-router-dom";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SensorData from './SensorData';
 import CommunityData from './CommunityData';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HelpIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Help
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Problem page
            </Typography>
     
              <Grid container spacing={2} justify="center">
                <Grid item>
                <Typography variant="h5">
                 Rue de Londres 2.1
                </Typography>
                </Grid>
              </Grid>

          </Container>
        </div>
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}> {/* lg */}
          <Grid container spacing={3}>
            {/* LighStatus */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <SensorData />
              </Paper>
            </Grid>
            {/* Jobs list */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <CommunityData />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </main>
    </React.Fragment>
  );
}

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import HelpIcon from '@material-ui/icons/Help';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Map from './Map';



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
        <Container className={classes.cardGrid} maxWidth="sm">
          {/* End hero unit */}
            <Grid container spacing={3}>
              <Grid item xs={12} >
              <Map/>
               </Grid>
               <Grid item xs={6} sm={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="Broken ligth.jpg"
                    title="Image title"
                  />
               </Card>
               </Grid>
               <Grid item xs={6} sm={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="Broken ligth.jpg"
                    title="Image title"
                  />
               </Card>
             </Grid>
            </Grid>
          </Container>
      </main>
    </React.Fragment>
  );
}

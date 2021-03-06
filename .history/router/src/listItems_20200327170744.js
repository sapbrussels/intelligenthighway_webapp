import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
        <ListItem > 
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText  primary="jobs page" />
        </ListItem>
      <Link to='/Maintenance'>
          <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem></Link>
      <Link to='/Help'>
          <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="help" />
        </ListItem></Link>
  </div>
);


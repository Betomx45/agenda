import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import { Avatar, Typography } from '@mui/material';
import { Category, Logout, Settings } from '@mui/icons-material';

export const menuItems = (
  <div>
    <Avatar sx={{width:50, height:50}}></Avatar>
    <ListItem to="/configuracion" component={Link}>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Configuración" />
    </ListItem>
    <ListItem to="/categorias" component={Link}>
      <ListItemIcon>
        <Category />
      </ListItemIcon>
      <ListItemText primary="Categorias" />
    </ListItem>
    <ListItem to="/login" component={Link}>
      <ListItemIcon>
        <Logout />
      </ListItemIcon>
      <ListItemText primary="Salir" />
    </ListItem>
  </div>
);
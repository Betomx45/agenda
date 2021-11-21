import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { Category, Logout, Settings } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const menuItems = (
  <div>
    <ListItem to="/configuracion" component={Link}>
      <Avatar sx={{textAlign:'center'}}/>
    </ListItem>
    <Box sx={{marginTop:10}}>
    <ListItem to="/configuracion" component={Link}>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Configuración" />
    </ListItem>
    <ListItem to="/categoria" component={Link}>
      <ListItemIcon>
        <Category/>
      </ListItemIcon>
      <ListItemText primary="categorias" />
    </ListItem>
    <ListItem to="/login" component={Link}>
      <ListItemIcon>
        <Logout />
      </ListItemIcon>
      <ListItemText primary="Salir" />
    </ListItem>
    </Box>
  </div>
);

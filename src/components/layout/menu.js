import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { Category, Logout, Settings } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';



export const menuItems = (
  <div >
    <ListItem to="/" component={Link}>
      <Avatar sx={{textAlign:'center'}}/>
    </ListItem>
    <Box sx={{marginTop:10}}>
    <Divider/>
    <ListItem to="/" component={Link}>
      <ListItemIcon>
        <HomeOutlinedIcon  />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>

    <ListItem to="/registro" component={Link}>
      <ListItemIcon>
      <FormatListBulletedRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Registro de Tareas" />
    </ListItem>

    <ListItem to="/agendar" component={Link}>
      <ListItemIcon>
        <ScheduleRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Agendar Tarea" />
    </ListItem>

    <ListItem to="/calendario" component={Link}>
      <ListItemIcon>
        <EventNoteRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Calendario de Tareas" />
    </ListItem>

    <ListItem to="/configuracion" component={Link}>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Configuración" />
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

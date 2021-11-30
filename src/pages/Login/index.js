import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Schedule } from '@mui/icons-material';
import Buttons from './Buttons';
import ButtonFacebook from './ButtonFacebook';

const theme = createTheme();

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ fontSize: 30, m: 5, bgcolor: 'secondary.main', width: 100, height: 100 }} >
            <Schedule />
          </Avatar>
          <Typography component="h1" variant="h2">
            Home Record
          </Typography>
          <Typography component="h4" variant="h4" sx={{ mt: 1, mb: 1 }}>
            Bienvenido
          </Typography>
          <Typography component="h6" variant="h6" sx={{ mt: 1, mb: 1 }}>
            Inicia sesión con:
          </Typography>
          <Box component="form"  sx={{ mt: 0 }}>
            <Button
              type="submit"
              sx={{ mt: 0, mb: 2 }}
            >
              <ButtonFacebook/>
            </Button>
            <br/>
            <Button
              type="submit"
              sx={{ mt: 0, mb: 2 }}
            >
              <Buttons/>
            </Button>
          </Box>
        </Box>
    </ThemeProvider>
  );
}
export default Login;
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Facebook, Google, Schedule } from '@mui/icons-material';
import { BrowserRouter } from 'react-router-dom';

import { GoogleLogin } from 'react-google-login';


const theme = createTheme();

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const responseGoogle = (response) => {
    console.log(response);
  }

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
          <Typography component="h4" variant="h4" sx={{ mt: 1, mb: 3 }}>
            Bienvenido
          </Typography>
          <Typography component="h6" variant="h6" sx={{ mt: 1, mb: 3 }}>
            Inicia sesión con:
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 5 }}
              startIcon={<Facebook icon={Facebook} />}
            >
              Facebook
            </Button>
            <Button
                            type="submit"
                            fullWidth
                            sx={{ mt: 0, mb: 2 }}
            >
            <GoogleLogin
              clientId="1021593475191-hj8ur1fd2rik41djl67p8go8566j61ek.apps.googleusercontent.com"
              buttonText="Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default Login;
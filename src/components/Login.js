import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Facebook, Google } from '@mui/icons-material';


const theme = createTheme();

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
          <Avatar sx={{fontSize:30, m: 5, bgcolor: 'secondary.main' }} >
            <EventNoteIcon/>
          </Avatar>
          <Typography component="h1" variant="h2">
            Home Record
          </Typography>
          <Typography component="h4" variant="h4" sx={{mt:1, mb:3}}>
            Bienvenido
          </Typography>
          <Typography component="h6" variant="h6" sx={{mt:1, mb:3}}>
            Inicia sesión con:
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 10 }}
              startIcon={<Facebook icon={Facebook} />}
            >
              Facebook
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 0, mb: 2 }}
              startIcon={<Google icon={Google} />}
            >
              Google
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default SignIn;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles';

import { blue, pink } from '@material-ui/core/colors';

import Header from './components/Layout/Header';
import User from './components/User';
import Routes from './Routes';

import { loadUser } from './utils/dbUtils';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const theme = createTheme({
  palette: {
    primary: { main: blue[700] },
  },
  secondary: pink,
});

function App() {
  const auth = getAuth();
  const [user, setUser,] = useState(null);

  const onLogout = () => {
    setUser(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, response => {
      if (response) {
        // leer datos del usuario
        loadUser(response.uid)
          .then(data => { setUser(data); });
        /* firebase.database().ref(`/users/${response.uid}`)
        .once('value')
        .then(snapshot => {
          setUser(snapshot.val()); 
        });*/
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Header>
          {user && <User user={user} onLogout={onLogout} />}
        </Header>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
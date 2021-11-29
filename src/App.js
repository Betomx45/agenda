import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from './Routes'

import Layout from './components/layout';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Layout>
        <Rutas />
      </Layout>
    </Router>
  );
}
export default App;
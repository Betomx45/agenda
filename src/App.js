import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes'

import Header from './components/layout/Header';


function App() {
  return (
    <Router>
      <Header />
      <Routes />      
    </Router>
  );
}
export default App;
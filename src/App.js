import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes'
import Layout from './components/layout';



function App() {
  return (
    <Router>
      <Layout/>
      <Routes/>    
    </Router>
  );
}
export default App;
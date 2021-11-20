import {Route} from 'react-router-dom';
import { Switch } from '@mui/material';
import SignIn from './components/Login';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={SignIn}/>
    </Switch>
);
export default Routes;
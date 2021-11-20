import React from 'react';
import { Route} from 'react-router-dom';
import { Switch } from '@mui/material';
//componentes
import Layout from './components/layout';
import SignIn from './components/Login';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Layout}/>
        <Route exact path="/login" component={SignIn}/>
    </Switch>
);
export default Routes;
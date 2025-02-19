// src/routes.js
import {Route, Redirect, Switch} from 'react-router-dom';
import Dashboard from './views/Dashboard';
import AppelsDOffre from './views/AppelsDOffre';
import GreAGre from './views/GreAGre';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Settings from './views/Settings';

const Routes = () => (
    <Switch>
        <Route path="/login" component={Login}/>

        <Redirect from="/" to="/home"/>
    </Switch>
);

export default Routes;

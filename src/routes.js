import React from 'react';
import Home from './Vers2/Home'
import { Route,Router} from 'react-router-dom';
import {createBrowserHistory} from '../node_modules/history'
import History from './Vers2/History'
import OS from './Vers2/OS'
import Auth from './Vers2/Auth'
import Registr from './Vers2/Registr'
import SSH from './Vers2/ssh'

/**
 * Import all page components here
 */
//import App from './App';
//import SSH from './components/ssh';

const history = createBrowserHistory();

//Маршрутизация сайта
function Navigation() {
    return(
        <Router history={history}>
            <Route exact path='/' component={Home}/>
            <Route path='/history' component={History}/>
            <Route path='/os' component={OS}/>
            <Route path='/auth/login' component={Auth}/>
            <Route path='/auth/registration' component={Registr}/>
            <Route path="/ssh" component={() => <SSH id='5'/>} />
        </Router>
    )
}

export default Navigation
/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
/*export default (
    <Route path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="/ssh" component={SSH} />
    </Route>
);*/

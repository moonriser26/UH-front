import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registr from './Vers2/Registr';
import Home from './Vers2/Home'
import OS from './Vers2/OS'
import Auth from './Vers2/Auth'
import { useSelector } from 'react-redux';
import Commands from './Vers2/Commands';


//Уже не используется
function App() {
  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <BrowserRouter>
      <div className='App'>
        {/*
          <Switch>
          <Route path='/auth/login' component={Auth}/>
          <Route path='/auth/registration' component={Registr}/>
        </Switch>*/
        }
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/os' component={OS}/>
          <Route path='/auth/login' component={Auth}/>
          <Route path='/auth/registration' component={Registr}/>
          <Route path='/commands' component={Commands}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

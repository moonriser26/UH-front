import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Registr from './Vers2/Registr';
import Home from './Vers2/Home'
import OS from './Vers2/OS'
import Auth from './Vers2/Auth'
import { useSelector } from 'react-redux';


//Уже не используется
function App() {
  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <BrowserRouter>
      <div className='App'>
        {!isAuth &&
          <Switch>
          <Route path='/auth/login' component={Auth}/>
          <Route path='/auth/registration' component={Registr}/>
        </Switch>
        }
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/os' component={OS}/>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

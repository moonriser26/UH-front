import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import App from './App';
import { store } from './Vers2/reducers.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
    
    {/*<Navigation />

    <Route exact path="/ssh" component={ssh} />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//     <Router routes={routes} />,
//     document.getElementById('App')
// );

reportWebVitals();

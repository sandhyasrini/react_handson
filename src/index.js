import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/components/App/index';
import Landing from './client/components/Landing/landing';

import * as serviceWorker from './serviceWorker';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render( <BrowserRouter>
    
      <Switch>
        <Route exact path="/login" component={App} />
        <Route path="/home" component= {Landing} />
      </Switch>
    
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

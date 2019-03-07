import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/components/App/index';
import Landing from './client/components/Landing/landing';
import Kaptain from './client/components/items/kaptain'
import Pop from './client/components/items/pop'
import Stax from './client/components/items/stax'
import Nordik from './client/components/items/nordik'


import * as serviceWorker from './serviceWorker';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render( <BrowserRouter>
    
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/home" component= {Landing} />
        <Route path="/kaptain" component= {Kaptain} />
        <Route path="/pop" component= {Pop} />
        <Route path="/stax" component= {Stax} />
        <Route path="/nordik" component= {Nordik} />

      </Switch>
    
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';
import '../../styles/App.css';
import Header from '../Login/header'
import Login from '../Login/login'
import Intro from '../Login/Intro'

import bgImage from '../../img/kaptain-bg.png'



class App extends Component {
  render() {
    return (
        <div style= {
          {  background:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),url(" +bgImage+")",
          height:"100vh"
        }
        }>
            <Header />
            <div className="App">
            <Intro />
            <div className ="col-md-6">
               <Login   />
               </div>
            </div>
            
        </div>
    );
  }
}

export default App;

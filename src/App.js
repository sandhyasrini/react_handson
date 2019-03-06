import React, { Component } from 'react';
import './App.css';
import Header from './header'
import Login from './login'
import Subscribe from './subscribe'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bgImage from './kaptain-bg.png'


class App extends Component {
  render() {
    return (
        <div style= {
          {  background:"linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),url(" +bgImage+")"
        }
        }>
            <Header />
            <div className="App">
               <Login   />
              
               <Subscribe />
            </div>
            
        </div>
    );
  }
}

export default App;

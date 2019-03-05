import React, { Component } from 'react';
import './App.css';
import Header from './header'
import Login from './login'
import Subscribe from './subscribe'



class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <div className="App">
               <Login   />
               {/* <hr style={{
                 width:"50%",
                 color:"#aaaaaa"
               }} /> */}
               <Subscribe />
            </div>
            
        </div>
    );
  }
}

export default App;

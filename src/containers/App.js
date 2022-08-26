import React, { Component } from 'react';
import BtsTest from './btsTest';
import './css/App.css';

class  App extends Component{
    render(){

      return (
      <>
        <div className="App">
          <header className="App-header">
            
            <p>
              Battleship
            </p>
            
          </header>
        </div>
        <BtsTest test="app is testing"/>
      </>
    );
  }
}

export default App;

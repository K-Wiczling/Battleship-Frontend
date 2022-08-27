import React, { Component } from 'react';
import BtsTest from '../components/btsTest';
import SplashScreen from '../components/SplashScreen';
import './css/App.css';
import Game from './Game';
import MainMenu from './MainMenu';
import modes from '../classes/globalParam';
import ErrorBoundries from '../components/ErrorBoundries';

class  App extends Component{
  constructor(props){
    super(props);
    this.state = {
      //For testing set to game
      mode: modes.game,

      //To be removed from production
      test: "tessting.."
      //----------------------------
    }
  }
  StartGame = () => {
    this.setState({mode: modes.game});
  }
  OpenMenu = () => {
    this.setState({mode: modes.menu});
  }
  ShowSplash = () => {
    this.setState({mode: modes.splash});
  }
  
  ChangeMode = (setMode) =>{
    this.setState({mode : setMode})
  }
  
  render(){
    switch (this.state.mode) {

      //Show Splashscreen
      case modes.splash:{
        return(<SplashScreen onclick={this.OpenMenu} />);
      }
      
      //Open Menu
      case modes.menu:{
        return(
          <ErrorBoundries>
            <MainMenu onclick={this.StartGame} />
          </ErrorBoundries>
          );
      }

      //Start Game
      case modes.game:{
        return (
          <ErrorBoundries>
            <div className="app">
                <Game game={this.state} testing={this.Test} />
            </div>

            <BtsTest test={this.state.test} />
          </ErrorBoundries>
        );
      }
      default: { break;}  
            
    }

  }

  //To be removed from production
  Test = (text) => {
    this.setState({test: text});
  }
  //----------------------------
}

export default App;

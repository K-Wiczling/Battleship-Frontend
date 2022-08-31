//css
import './css/App.css';

//React stuff
import React, { Component } from 'react';

//Components
import SplashScreen from '../components/SplashScreen';
import ErrorBoundries from '../components/ErrorBoundries';

//containers
import Game from './Game';
import MainMenu from './MainMenu';

//Classes
import server from '../classes/server';

//Main entrance to the app 
class  App extends Component{
  constructor(props){
    super(props);
    this.modes = server.getModes();
    this.state = {
      //For testing set to game
      mode: this.modes.game,

    }
  }
  StartGame = () => {
    this.setState({mode: this.modes.game});
  }
  OpenMenu = () => {
    this.setState({mode: this.modes.menu});
  }
  ShowSplash = () => {
    this.setState({mode: this.modes.splash});
  }
  
  ChangeMode = (setMode) =>{
    this.setState({mode : setMode})
  }
  
  render(){
    switch (this.state.mode) {

      //Show Splashscreen
      case this.modes.splash:{
        return(<SplashScreen onclick={this.OpenMenu} />);
      }
      
      //Open Menu
      case this.modes.menu:{
        return(
          <ErrorBoundries>
            <MainMenu onclick={this.StartGame} />
          </ErrorBoundries>
          );
      }

      //Start Game
      case this.modes.game:{
        return (
          <ErrorBoundries child="Game Compontent">
            <div className="app">
                <Game gameState={this.state} testing={this.Test} />
            </div>
          </ErrorBoundries>
        );
      }
      default: { break;}  
            
    }

  }

}

export default App;

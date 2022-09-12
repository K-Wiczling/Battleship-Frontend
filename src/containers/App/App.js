//css
import './App.css';

//React stuff
import React, { Component } from 'react';

//Components
import SplashScreen from '../../components/SpalshScreen/SplashScreen';
import ErrorBoundries from '../../components/ErrorBoundries/ErrorBoundries';

//Containers
import Game from '../Game/Game';
import MainMenu from '../MainMenu/MainMenu';

//Redux
import {connect} from "react-redux"
import {changeMode} from "./actions"
import { MODE_GAME, MODE_MAIN_MENU, MODE_SPLASH_SCREEN } from './constants';

const mapStateToProps = (state) => {
  return {
    mode: state.changeMode.mode
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    openMenu: () => dispatch(changeMode(MODE_MAIN_MENU)),
    showSplashScreen: () => dispatch(changeMode(MODE_SPLASH_SCREEN)),
    startGame: () => dispatch(changeMode(MODE_GAME))
  }
}
//Main entrance to the app 
class  App extends Component{
 
  render(){
    
    switch (this.props.mode) {

      //Show Splashscreen
      case MODE_SPLASH_SCREEN:{
        return(<SplashScreen onclick={this.props.openMenu} />);
      }
      
      //Open Menu
      case MODE_MAIN_MENU:{
        return(
          <ErrorBoundries>
            <MainMenu onclick={this.props.startGame} />
          </ErrorBoundries>
          );
      }

      //Start Game
      case MODE_GAME:{
        return (
          <ErrorBoundries child="Game Compontent">
            <div className="app">
                <Game testing={this.Test} />
            </div>
          </ErrorBoundries>
        );
      }
      default: { 
        return(<SplashScreen onclick={this.props.openMenu} />);
      }  
            
    }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

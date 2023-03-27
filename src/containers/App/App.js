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
import Website from '../Website/Website';

//Redux
import { connect } from "react-redux"
import { changeModes } from "./actions"
import { MODE_GAME, MODE_MAIN_MENU, MODE_SPLASH_SCREEN, MODE_WEBSITE } from './constants';

const mapStateToProps = (state) => {
  return {
    mode: state.changeMode.mode,
    testing: state.changeGameConsole.consoleText,
    gameSetup: state.setupGame
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    openMenu: () => dispatch(changeModes(MODE_MAIN_MENU)),
    showSplashScreen: () => dispatch(changeModes(MODE_SPLASH_SCREEN)),
    startGame: () => dispatch(changeModes(MODE_GAME)),
    goToWebsite: () => dispatch(changeModes(MODE_WEBSITE))
  }
}
//Main entrance to the app 
class  App extends Component {
  render () {
    switch (this.props.mode) {
      //Show Splashscreen
      case MODE_SPLASH_SCREEN: {
        return(<SplashScreen />);
      }
      //Open Menu
      case MODE_MAIN_MENU: {
        return(
          <ErrorBoundries>
            <MainMenu />
          </ErrorBoundries>
          );
      }
      //Start Game
      case MODE_GAME: {
        return (
          <ErrorBoundries child="Game Compontent">
            <div className="app">
                <Game />
            </div>
          </ErrorBoundries>
        );
      }
      //Show Websitge
      case MODE_WEBSITE: {
        return(<Website showSplash={this.props.showSplashScreen}  />);
      }

      //By default return SplashScreen 
      default: return (<SplashScreen />);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

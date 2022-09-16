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
import { connect } from "react-redux"
import { changeModes } from "./actions"
import { MODE_GAME, MODE_MAIN_MENU, MODE_SPLASH_SCREEN } from './constants';

const mapStateToProps = (state) => {
  return {
    mode: state.changeMode.mode,
    testing: state.changeGameConsole.consoleText,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    openMenu: () => dispatch(changeModes(MODE_MAIN_MENU)),
    showSplashScreen: () => dispatch(changeModes(MODE_SPLASH_SCREEN)),
    startGame: () => dispatch(changeModes(MODE_GAME)),
  }
}
//Main entrance to the app 
class  App extends Component {
  render () {
    switch (this.props.mode) {
      //Show Splashscreen
      case MODE_SPLASH_SCREEN: {
        return(<SplashScreen onclick={this.props.openMenu} />);
      }
      //Open Menu
      case MODE_MAIN_MENU: {
        return(
          <ErrorBoundries>
            <MainMenu onclick={this.props.startGame} />
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
      //By default return SplashScreen 
      default: return (<SplashScreen onclick={this.props.openMenu} />);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

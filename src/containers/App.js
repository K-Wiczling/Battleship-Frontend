import React, { Component } from 'react';
import BtsTest from '../components/btsTest';
import SplashScreen from '../components/SplashScreen';
import './css/App.css';
import Game from './Game';
import MainMenu from './MainMenu';

class  App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isMenu: false,
      isPlaying: false,
      gameMode: ""
    }
  }
  StartPlay = () =>{
    this.setState({isPlaying : true})
    this.setState({isMenu : false})
  }
  
  OpenMenu = () => {
    this.setState({isMenu : true})
  }
  render(){
    console.log(this.state.isPlaying , this.state.isMenu);
    //start game
    if(this.state.isPlaying  && !this.state.isMenu){
      return (
        <>
          <div className="app">
              <Game game={this.state} />
          </div>
          <BtsTest test={`testing...`} />
        </>
      );
    
    }
    //Open menu
    else if(!this.state.isPlaying && this.state.isMenu){
      return(
        <MainMenu onclick={this.StartPlay} />
        );
    }
    // show splash screen
    else{
      return(
        <SplashScreen onclick={this.OpenMenu} />
        );
    
    }
  }
}

export default App;

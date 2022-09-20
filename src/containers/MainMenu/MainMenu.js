//css
import "./MainMenu.css";

//React
import React, { Component } from 'react';

//Redux
import { connect } from "react-redux";
import { 
    changeModes,
    setupEnemyType,
    setupAiDifficulty,
    setupFleetType,
    setupBoardSize
} from "../App/actions"
import { MODE_GAME, MODE_MAIN_MENU, MODE_SPLASH_SCREEN } from '../App/constants';

//Components
import Button from '../../components/Button/Button';
import Head from '../../components/Head/Head';
import MenuTab from "../../components/MenuTab/MenuTab";

const mapStateToProps = (state) => {
    return {
      mode: state.changeMode.mode,
    }
  }
const mapDispatchToProps = (dispatch) => {
return {
    showSplashScreen: () => dispatch(changeModes(MODE_SPLASH_SCREEN)),
    startGame: () => dispatch(changeModes(MODE_GAME)),
}
}
//Menu Constants
const MENU_MODE_MAIN_MENU = "MENU_MODE_MAIN_MENU";
const MENU_MODE_LOBBY = "MENU_MODE_LOBBY";
const MENU_MODE_SETTINGS = "MENU_MODE_SETTINGS";
const MENU_MODE_RANKINGS = "MENU_MODE_RANKINGS";

//Display main menu and take care of the whole logic in here
class  MainMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuMode: MENU_MODE_MAIN_MENU
        }
    }
    showMainMenu = () => {
        this.setState({ menuMode: MENU_MODE_MAIN_MENU});
    }
    showLobby = () => {
        this.setState({ menuMode: MENU_MODE_LOBBY});
        
    }
    showSettings = () => {
        this.setState({ menuMode: MENU_MODE_SETTINGS});
        
    }
    showRankings = () => {
        this.setState({ menuMode: MENU_MODE_RANKINGS});
        
    }
    render () {
        return (
            <div className="main-menu-container">

                <Head text="Battleship" />
                {
                    (() => {
                        let key = 1
                        switch (this.state.menuMode) {

                            //Main menu
                            case MENU_MODE_MAIN_MENU:{
                                return (
                                    <div className="main-menu grid-center">
                                        <h3>Main menu</h3>
                                        <Button text="New Game" onclick={ this.showLobby }/>
                                        <Button text="Settings" onclick={ this.showSettings }/>
                                        <Button text="Rankings" onclick={ this.showRankings}/>
                                        <Button text="Exit" onclick={ this.props.showSplashScreen }/>
                                    </div>
                                );
                            }
                            //Lobby
                            case MENU_MODE_LOBBY:{
                                return (
                                    <div className="lobby grid-center">
                                        <h3>Lobby</h3>
                                        <MenuTab>
                                            <Button text="Start Game" onclick={ this.props.startGame }/>
                                        </MenuTab>
                                        {/* <Button text="Back To Main Menu" onclick={ this.showMainMenu }/> */}
                                    </div>
                
                                );
                            }
                            //Settings
                            case MENU_MODE_SETTINGS:{
                                return (
                                    <div className="Settings grid-center">
                                        <h3>Settings</h3>
                                        <Button text="Back To Main Menu" onclick={ this.showMainMenu }/>
                                    </div>
                                );
                            }
                            //Rankings
                            case MENU_MODE_RANKINGS:{
                                return (
                                    <div className="Rankings grid-center">
                                        <h3>Rankings</h3>
                                        <Button text="Back To Main Menu" onclick={ this.showMainMenu }/>
                                    </div>
                                );
                            }
                                
                            default:
                                return(
                                <div className="Rankings grid-center" >
                                    <h3>Empty</h3>
                                    <Button text="Back To Main Menu" onclick={ this.showMainMenu }/>
                                </div>
                            );
                        }
                    })()
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);

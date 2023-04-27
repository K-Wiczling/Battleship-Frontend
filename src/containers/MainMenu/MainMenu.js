// Css
import "./MainMenu.css";

// React
import React, { Component } from 'react';

// Redux
import { connect } from "react-redux";
import { 
    changeAppMode,
    setupEnemyType,
    setupAiDifficulty,
    setupFleetType,
    setupBoardSize
} from "../App/redux/actions"
import { MODE_GAME, MODE_WEBSITE } from '../App/redux/constants';

// Components
import Button from '../../components/Atoms/Button/Button';
import Head from '../../components/Atoms/Head/Head';
import MenuTab from "../../components/Atoms/MenuTab/MenuTab";
import Lobby from "../../components/MenuParts/Lobby/Lobby";

const mapStateToProps = (state) => {
    return {
    }
  }
const mapDispatchToProps = (dispatch) => {
return {
    startGame: () => dispatch(changeAppMode(MODE_GAME)),
    exitGame: () => dispatch(changeAppMode(MODE_WEBSITE))
}
}
// Menu Constants
const MENU_MODE_MAIN_MENU = "MENU_MODE_MAIN_MENU";
const MENU_MODE_LOBBY = "MENU_MODE_LOBBY";
const MENU_MODE_SETTINGS = "MENU_MODE_SETTINGS";
const MENU_MODE_RANKINGS = "MENU_MODE_RANKINGS";

// Display main menu and take care of the whole logic in here
class  MainMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuMode: MENU_MODE_MAIN_MENU,
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

                <Head text="Battleship" classes={'btn-huge btn-hollow'}  />
                {
                    (() => {
                        let key = 1
                        switch (this.state.menuMode) {

                            // Display Main menu
                            case MENU_MODE_MAIN_MENU:{
                                return (
                                    <div className="main-menu grid-center">
                                        <h3>Main menu</h3>
                                        <Button text="New Game" onclick={ this.showLobby }classes={'btn-huge btn-hollow'}  />
                                        <Button text="Settings" onclick={ this.showSettings } classes={'btn-huge btn-hollow'}  />
                                        <Button text="Rankings" onclick={ this.showRankings} classes={'btn-huge btn-hollow'}  />
                                        <Button text="Exit" onclick={ this.props.exitGame }classes={'btn-huge btn-hollow'}  />
                                    </div>
                                );
                            }
                            // Display Lobby
                            case MENU_MODE_LOBBY:{
                                return (
                                    <div className="lobby grid-center">
                                        <h3>Lobby</h3>
                                        <MenuTab>
                                            <Lobby />
                                            <Button text="Start Game" onclick={ this.props.startGame } classes={'btn-huge btn-hollow'}  />
                                            <Button text="Main Menu" onclick={ this.showMainMenu }classes={'btn-huge btn-hollow'}  />
                                        </MenuTab>
                                    </div>
                
                                );
                            }
                            // Display Settings
                            case MENU_MODE_SETTINGS:{
                                return (
                                    <div className="Settings grid-center">
                                        <h3>Settings</h3>
                                        <Button text="Main Menu" onclick={ this.showMainMenu } classes={'btn-huge btn-hollow'}  />
                                    </div>
                                );
                            }
                            // Display Rankings
                            case MENU_MODE_RANKINGS:{
                                return (
                                    <div className="Rankings grid-center">
                                        <h3>Rankings</h3>
                                        <Button text="Main Menu" onclick={ this.showMainMenu } classes={'btn-huge btn-hollow'}  />
                                    </div>
                                );
                            }
                                
                            default:
                                return(
                                <div className="Rankings grid-center" >
                                    <h3>Empty</h3>
                                    <Button text="Main Menu" onclick={ this.showMainMenu } classes={'btn-huge btn-hollow'}  />
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

// Css
import "./InGameMenu.css"

// React
import React from 'react';

// Redux
import { connect } from "react-redux";
import { MODE_SPLASH_SCREEN } from "../../../containers/App/constants";
import { changeModes } from "../../../containers/App/actions"
import { toggleInGameMenu } from "../../../containers/Game/game-actions";

// Components
import Button from '../Button/Button';
import gm from "../../../classes/GameMenager/gameMenager";


const mapStateToProps = (state) => {
    return {
        menuVisibility: state.inGameMenu.menuVisibility,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: () => dispatch(toggleInGameMenu()),
        leaveTheGame: () => dispatch(changeModes(MODE_SPLASH_SCREEN))
    }
}

// Pop up menu to display in the game
const InGameMenu = (props) => {

    return (
        <div className="in-game-menu">

            <div className="in-game-menu-icon"
                onClick={() => {
                    props.toggleMenu()
                }}>
                <img className="hamburger-icon" src="hamburger.png"></img>
            </div>

            {
                (() => {
                    if (props.menuVisibility) {

                        return (
                            <div className="in-game-menu-content grid-center" >
                                <h2>Menu</h2>
                                <Button
                                    text="Settings"
                                    width={350}
                                    height={70}
                                    onclick={() => { }} />

                                <Button
                                    text="Exit"
                                    width={350} 
                                    height={70}
                                    onclick={() => {
                                        props.toggle(!props.menuVisibility)
                                        gm.leaveTheGame();
                                        props.leaveTheGame()
                                    }} />
                            </div>
                        );
                    }
                })()
            }
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(InGameMenu);

//css
import "./PopUpMenu.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { MODE_SPLASH_SCREEN } from "../../containers/App/constants";
import {
    changeModes
} from "../../containers/App/actions"

//Components
import Button from '../../components/Button/Button';
import gm from "../../classes/GameMenager/gameMenager";


const mapStateToProps = (state) => {
    return {
        menuVisibility: state.inGameMenu.menuVisibility,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        leaveTheGame: () => dispatch(changeModes(MODE_SPLASH_SCREEN))
    }
}
//Pop up menu to display in the game
const PopUpMenu = (props) => {

    return (
        <div className="pop-up-menu">
            <div className="menu-icon" onClick={() => { props.toggle(!props.menuVisibility) }}>
                <img className="rot" src="arrow.png"></img>
            </div>
            {
                (() => {
                    if (props.menuVisibility) {

                        return (
                            <div className="menu-content grid-center" >
                                <h2>Menu</h2>
                                <Button text="Settings" onclick={() => { }} width={350} height={70} />
                                <Button text="Exit"
                                    width={350} height={70}
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
export default connect(mapStateToProps, mapDispatchToProps)(PopUpMenu);

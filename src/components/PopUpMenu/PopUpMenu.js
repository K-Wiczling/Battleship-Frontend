//css
import "./PopUpMenu.css"

//React
import React from 'react';
import server from "../../classes/server";

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
const  PopUpMenu = (props) => {
    
    return (
        <div className="pop-up-menu">
            <div className="menu-icon" onClick={() => { props.toggle(!props.menuVisibility) }}>
                M
            </div>
            { 
                (() => {
                    if(props.menuVisibility){

                        return (
                            <div className="menu-content grid-center" >
                            <h3>Menu</h3>
                            <Button text="Settings" onclick={ () => {} }/>
                            <Button text="Exit" onclick={ () => {
                                props.toggle(!props.menuVisibility)
                                gm.leaveTheGame();
                                props.leaveTheGame() 
                            }}/>
                        </div>
                        );
                    }
                })()
            }
        </div>
    );
  }
export default connect(mapStateToProps, mapDispatchToProps)(PopUpMenu);

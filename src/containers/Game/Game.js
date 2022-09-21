//css
import "./Game.css"
//React stuff
import React, { Component } from 'react';

//Components
import Draw from '../../components/Draw/Draw';
import GameConsole from "../../components/GameConsole/GameConsole"

//Classes
import gm from "../../classes/GameMenager/gameMenager"

//Redux
import { connect } from "react-redux"
import { 
    fillBothBoards, toggleInGameMenu
} from "./game-actions";
import PopUpMenu from "../../components/PopUpMenu/PopUpMenu";

const mapStateToProps = (state) => {
    return {
        menuVisibility: state.inGameMenu.menuVisibility,
        consoleText: state.changeGameConsole.consoleText,
        consoleTime: state.changeGameConsole.consoleTime,
        playerBoard: state.changeBoard.playerBoard,
        enemyBoard: state.changeBoard.enemyBoard,
        setup: state.setupGame
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: (toggle) => dispatch(toggleInGameMenu(toggle)),
        setupBoards: () => dispatch(fillBothBoards(gm.player.board, gm.enemy.board))
    }
}

//Enetry point of the game in the view side
class  Game extends Component {
    
    componentDidMount () {
        gm.setupTheGame(this.props.setup);
        this.props.setupBoards(gm);
    }
    render () {      
        return (
            <div className="Game">

                <PopUpMenu 
                    toggle={this.props.toggleMenu} 
                    menuVisibility={this.props.menuVisibility}
                />
        
                <div className='player-board' >
                    <Draw 
                        whichBoard={ gm.player.name } 
                    />
                </div>
                <div className='enemy-board'>
                    <Draw 
                        whichBoard={ gm.enemy.name } 
                    />
                </div>
                <GameConsole />
            </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);

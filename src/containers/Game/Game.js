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
    fillBothBoards
} from "./game-actions";

const mapStateToProps = (state) => {
    return {
        gameMenager: state.changeBoard.gameMenager,
        consoleText: state.changeGameConsole.consoleText,
        consoleTime: state.changeGameConsole.consoleTime,
        playerBoard: state.changeBoard.playerBoard,
        enemyBoard: state.changeBoard.enemyBoard
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setupBoards: () => dispatch(fillBothBoards(gm.player.board, gm.enemy.board))
    }
}
class  Game extends Component {
    componentDidMount () {
        this.props.setupBoards(gm);
    }
    render () {      
        return (
            <div className="Game">
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

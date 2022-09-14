//css
import "./Game.css"
//React stuff
import React, { Component } from 'react';

//Components
import Draw from '../../components/Draw/Draw';
import GameConsole from "../../components/GameConsole/GameConsole"

//Classes
import gameMenager from "../../classes/gameMenager"
import server from '../../classes/server';

//Redux
import {connect} from "react-redux"
import { 
    tileClickPlayerBoard, 
    tileClickEnemyBoard, 
    insertInGameConsole, 
    fillBothBoards
} from "./game-actions";

//Singleton object that holds all game information
const gm = new gameMenager();



const mapStateToProps = (state) =>{
    return {
        gameMenager: state.changeBoard.gameMenager,
        consoleText: state.changeGameConsole.consoleText,
        consoleTime: state.changeGameConsole.consoleTime,
        playerBoard: state.changeBoard.playerBoard,
        enemyBoard: state.changeBoard.enemyBoard
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        setupBoards: () => {
            return dispatch(fillBothBoards(gm.player.board, gm.enemy.board));
        },
        playerTileClick: (position) => {
            if(gm.ClickedBoard(server.Params.players.player, position)){
                return dispatch(tileClickPlayerBoard(gm.player.board));
            };
        },
        enemyTileClick: (position) => {
            if(!gm.gameState === server.Params.gameState.setup){
                if(gm.ClickedBoard(server.Params.enemy.player, position)){
                    return dispatch(tileClickEnemyBoard(gm.enemy.board));
                }
            }
        },
        insertInGameConsole: (text, time) => dispatch(insertInGameConsole(text, time))
    }
}

class  Game extends Component{
    componentDidMount(){
        this.props.setupBoards(gm);
    }
    render(){      
        return (
            <div className="Game">
                <div className='player-board' >
                    <Draw 
                        whichBoard={gm.player.name} 
                        onTileClick={this.props.playerTileClick}
                    />
                </div>
                <div className='enemy-board'>
                    <Draw 
                        whichBoard={gm.enemy.name} 
                        onTileClick={this.props.enemyTileClick}
                    />
                </div>
                <GameConsole />
            </div>
    );
  }


}

// export default Game;
export default connect(mapStateToProps, mapDispatchToProps)(Game);

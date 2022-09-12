//css
import "./Game.css"
//React stuff
import React, { Component } from 'react';

//Components
import Draw from '../../components/Draw/Draw';
import BtsTest from "../../components/btsTest/btsTest"

//Classes
import gameMenager from "../../classes/gameMenager"
import server from '../../classes/server';

//Redux
import {connect} from "react-redux"


class  Game extends Component{
    constructor(props){
        super(props);
        this.gm = new gameMenager();
        this.state = {
            testing: "testing...",
            playerBoard: this.gm.player.board,
            enemyBoard: this.gm.enemy.board
        }
    }
    TileClick = (whichBoard, position) => {
        // Testing only
        this.Test(`Clicked ${whichBoard} at position (${position.x};${position.y})`);
        if(whichBoard === server.Params.players.player && this.gm.gameState === server.Params.gameState.setup){
            if(this.gm.ClickedBoard(whichBoard, position)){
                this.setState({playerBoard: structuredClone(this.gm.player.board)});
            }

        }else if(whichBoard === server.Params.players.enemy && this.gm.gameState === server.Params.gameState.game){
            if(this.gm.ClickedBoard(whichBoard, position)){
                this.setState({enemyBoard: structuredClone(this.gm.player.board)});
            }
        }
    }
    render(){      
        return (
            <div className="Game">
                <div className='player-board' >
                    <Draw whichBoard={this.gm.player.name} board={this.state.playerBoard} onTileClick={this.TileClick}/>
                </div>
                <div className='enemy-board'>
                    <Draw whichBoard={this.gm.enemy.name} board={this.state.enemyBoard} onTileClick={this.TileClick}/>
                </div>
                
                <BtsTest test={this.state.testing} />
            </div>
    );
  }

  //To be removed from production
  Test = (txt) => {
    this.setState({testing: txt});
  }
  //----------------------------


}

// export default connect(mapStateToProps, mapDispatchToProps)(Game);
export default Game;

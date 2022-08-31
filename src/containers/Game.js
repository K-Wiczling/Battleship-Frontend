//css
import "./css/Game.css"
//React stuff
import React, { Component } from 'react';

//Components
import Draw from '../components/Draw';

//Classes
import gameMenager from "../classes/gameMenager"
import server from '../classes/server';

class  Game extends Component{
    constructor(props){
        super(props);
        this.gm = new gameMenager(server.getPlayers());
         

        this.state = {
            playerBoard: server.getClasicBoard(),
            enemyBoard: server.getClasicBoard()
        }
    }
    TileClick = (whichBoard, position) => {
        
        //Testing only
        this.Test(`Clicked ${whichBoard} at position (${position.x};${position.y})`);

        //Upadate board
        this.setState({playerBoard: this.gm.ClickedBoard(whichBoard, position)});
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
            </div>
    );
  }

  
  //To be removed from production
  Test = (txt) => {
    this.props.testing(txt);
  }
  //----------------------------


}

export default Game;

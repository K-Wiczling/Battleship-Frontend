import React, { Component } from 'react';
import Draw from '../components/Draw';
import gameMenager from "../classes/gameMenager"
import "./css/Game.css"
class  Game extends Component{
    constructor(props){
        super(props)
        this.gm = new gameMenager();
        this.gm.Setup();

    }
    TileClick = (whichBoard, position) => {
        this.Test(`Clicked ${whichBoard} at position (${position.x};${position.y})`);
        this.gm.Clicked(whichBoard, position);
        
    }
    render(){      

        return (
            <div className="Game">
                <div className='player-board' >
                    <Draw whichBoard={this.gm.player.name} onTileClick={this.TileClick}/>
                </div>
                <div className='enemy-board'>
                    <Draw whichBoard={this.gm.enemy.name} onTileClick={this.TileClick}/>
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

import React, { Component } from 'react';
import Draw from '../components/Draw';
import gameMenager from "../classes/gameMenager"
import "./css/Game.css"

class  Game extends Component{
    constructor(props){
        super(props)
        this.gm = new gameMenager();
    }
    
    render(){      

        return (
            <div className="Game">
                <Draw gm={`Game created Player: ${this.gm.player1.name}`}/>
            </div>
    );
  }
}

export default Game;

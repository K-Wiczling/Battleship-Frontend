import Tile from "../classes/tile";
import server from "./server";
import Point from "./point";

class Player {
    constructor(name){
        this.board = server.getClasicBoard();
        this.SetupBoard();
        this.ships = [];
        this.name = name;
        this.boardSize = 10;
    }
    Ships() { 
        this.ships = {
            double: 4,
            triple: 3,
            quadra: 2,
            panta: 1
        }
    }

    SetupBoard = () =>{
        for(let i = 1; i < this.board.length; ++i){
            for(let j = 1; j < this.board[i].length; ++j){          
                this.board[i][j] = new Tile(new Point(i,j), server.Params.tileState.empty);
            }
        }
    
    }
    getShot = (position, newTileState) =>{
        for (let state in server.Params.tileState) {
            if(state === newTileState){
                this.board[position.x][position.y].tileState = newTileState
                return true;
            }
        }
        return false;
    }
}
export default Player


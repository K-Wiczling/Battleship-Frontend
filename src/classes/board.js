import Tile from "./tile";
import Point from "./point";
import server from "./server";

class Board {
    constructor(){
        this.board = server.getClasicBoardPlayer();
    }

    SetupBoard = () =>{
        let i, j = 1;
        for (let row of this.board){
            ++i;
            for(let col of row){
                ++j;
                col = new Tile(new Point(i,j));
            }
        }      
        console.log(this.board);
    }
    ChangeTileState = (position, tileState) =>{
        this.board[position.x][position.y].ChangeTileState(tileState);
    }
}
export default Board;


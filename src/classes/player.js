import Tile from "./tile";
import Point from "./point";

const board = [
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10]
  ];

class Player {
    constructor(name){
        this.board = board;
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
    SetupBoard(){
        for (let i = 0; i < this.boardSize; i++) {
            for (let j = 0; j < this.boardSize; j++){
                this.board[i][j] = new Tile(new Point(i,j))
            }
        }
    }
}
export default Player


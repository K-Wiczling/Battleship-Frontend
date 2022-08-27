import Tile from "./tile";
import Point from "./point";
class Player {
    constructor(name){
        this.board = [[]];
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
                this.board[i][j] = new Tile(new Point(i,j,))
            }
        }
    }
}
export default Player


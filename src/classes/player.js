import Board from "./board";

class Player {
    constructor(name){
        this.board = new Board();
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
    getShot(position, tileState){
        this.board.ChangeTileState(position, tileState);
    }
}
export default Player


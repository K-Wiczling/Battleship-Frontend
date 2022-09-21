import server from "./server";

//Main validator for the GameMenager
class Validate {
    params = server.Params;
    constructor () {
        this.range = this.params.clasicBoard.length - 1;
        this.player = this.params.players;
    }

    //Valide if click is inside the boudries of the Clasic board
    validateBoardClick = (whichBoard, position, boardSize) => {
        if (whichBoard === this.player.enemy || this.player.player) {
            if (position.x >= 1 && position.x <= boardSize) {
                if (position.y >= 1 && position.y <= boardSize)
                    return true;
            }
        }
        return false;
    }
}
export default Validate;
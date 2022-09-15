import server from "./server";

//Main validator for the GameMenager
class Validate {
    params = server.Params;
    constructor () {
        this.range = this.params.clasicBoard.length - 1;
        this.player = this.params.players;
    }

    //Valide if click is inside the boudries of the Clasic board
    validateClasicBoardClick = (whichBoard, position) => {
        if (whichBoard === this.player.enemy || this.player.player) {
            if (position.x >= 1 && position.x <= 10) {
                if (position.y >= 1 && position.y <= 10)
                    return true;
            }
        }
        return false;
    }
}
export default Validate;
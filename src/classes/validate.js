import server from "./server";
const params = server.Params;

class Validate {
    constructor () {
        this.range = params.clasicBoard.length - 1;
        this.player = params.players;
    }

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
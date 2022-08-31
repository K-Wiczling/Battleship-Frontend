import Player from "./player";
import server from "./server";

class gameMenager{
    constructor(players, tilestates){
        this.player = new Player(players.player, tilestates);
        this.enemy = new Player(players.enemy, tilestates);
    }
    ClickedBoard(whichBoard, position){
        return server.getClasicBoard();
    }

}
export default gameMenager;

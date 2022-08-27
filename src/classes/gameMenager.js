import Player from "./player";
import {players} from "./globalParam"

class gameMenager{
    constructor(){
        this.player = new Player(players.player);
        this.enemy = new Player(players.enemy)
    }
    Setup(){
        this.player.SetupBoard();
        return this.player;
    }
    Clicked(whichBoard, position){
        console.log(whichBoard, position);
    }
}
export default gameMenager;

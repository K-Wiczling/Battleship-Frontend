import Player from "./player";
class gameMenager{
    constructor(){
        this.player1 = new Player("Gonzo");
        this.player2 = new Player("")
    }
    Setup(){
        return this.player1;
    }
}
export default gameMenager;

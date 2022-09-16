import Player from "./player";
import server from "../server";
import Validate from "../validate";

const params = server.Params;

//Entry point for all the things corelated with the game itself on the model side
class GameMenager {
    constructor () {
        //Singletone
        if (GameMenager.exists)
            return GameMenager.instance;

        //Hold Refrence to the bptch players
        this.player = new Player(params.players.player);
        this.enemy = new Player(params.players.enemy);
        
        
        this.validate = new Validate();
        this.gameState = params.gameState.setup;
        

        //Singletone
        GameMenager.exists = true;
        GameMenager.instance = this;
        return this;
    }
    updateGame = () => {

        //Checking 
        switch (this.gameState) {
            case params.gameState.pre:
                this.PreState();
                break;
            
            case params.gameState.setup:
                this.SetupState();
                break;
            
            case params.gameState.game:
                this.GameState();
                break;
            
            case params.gameState.end: 
                this.EndState();
                break;
        
            default:
                break;
        }
    }

    preState = () => {

    }
    setupState = () => {
        if(this.gameState !== params.gameState.setup){
            return false;
        }
        return true;
        
    }
    gameState = () => {
        
    }
    endState = () => {
    }
    
    //Returns 
    // true - putting a ship is posible and ship is palced on the board
    // false - putting a ship is NOT posible  
    clickedBoard = (whichBoard, position) => {
        if (this.validate.validateClasicBoardClick(whichBoard, position)) {
            
            if (this.gameState === params.gameState.game) {
                //Shooting only allowed in game and only on the enemy board
                return this.enemy.getShoot(whichBoard, position)
                
            }else if (this.gameState === params.gameState.setup)
                return this.player.setTile(whichBoard, position);
        }
    }
    
    

}
// export default gameMenager;

const gm = new GameMenager();
export default gm;
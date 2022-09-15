import Player from "./player";
import server from "./server";
import Validate from "./validate";

const params = server.Params;

class gameMenager{

    constructor(){
        if(gameMenager.exists){
            console.log("gm exist");  
            return gameMenager.instance
        }
        this.player = new Player(params.players.player);
        this.enemy = new Player(params.players.enemy);
        this.validate = new Validate();
        this.gameState = params.gameState.setup;
        gameMenager.exists = true;
        gameMenager.instance = this;
        return this;
    }
    UpdateGame = () =>{

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

    PreState = () =>{

    }
    SetupState = () =>{
        if(this.gameState !== params.gameState.setup){
            return false;
        }
        return true;
        
    }
    GameState = () =>{
        
    }
    EndState = () =>{
    }
    
    //Returns 
    // true - putting a ship is posible and ship is palced on the board
    // false - putting a ship is NOT posible  
    ClickedBoard = (whichBoard, position) => {
        if(this.validate.ValidateClasicBoardClick(whichBoard, position)){
            
            if(this.gameState === params.gameState.game){
                //Shooting only allowed in game and only on the enemy board
                return this.enemy.getShoot(whichBoard, position)
                
            }else if(this.gameState === params.gameState.setup)
                return this.player.SetTile(whichBoard, position);
        }
    }
    
    

}
// export default gameMenager;

const gm = new gameMenager();
export default gm;
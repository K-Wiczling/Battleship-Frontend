import Player from "./player";
import server from "./server";
import Validate from "./validate";

const params = server.Params;

class gameMenager{

    constructor(){
        this.player = new Player(params.players.player);
        this.enemy = new Player(params.players.enemy);
        this.validate = new Validate();
        this.gameState = params.gameState.setup;
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
    ClickedBoard(whichBoard, position){
        if(this.validate.ValidateClasicBoardClick(whichBoard, position)){

            if(this.gameState === params.gameState.game){
                //Shooting only allowed in game and only on the enemy board
                return this.enemy.getShoot(whichBoard, position)

            }else if(this.gameState === params.gameState.setup){
               
                return this.player.PutShip(whichBoard, position);
              
            }
           
        }

    }
    
    

}
export default gameMenager;

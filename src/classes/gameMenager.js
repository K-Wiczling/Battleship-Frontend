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
        
    }
    GameState = () =>{
        
    }
    EndState = () =>{
        
    }
    ClickedBoard(whichBoard, position){
        //validate click 
        if(this.gameState === params.gameState.game || this.gameState === params.gameState.setup){
            if(this.validate.ValidateClasicBoardClick(whichBoard, position)){
                return this.ChangeTileState(whichBoard, position);
            }
        }

    }
    ChangeTileState(whichBoard, position){
        if(whichBoard === params.players.player){
    
            this.player.getShot(position, params.tileState.hit);
            const board = structuredClone(this.player.board);
            return board

        }else if(whichBoard === params.players.enemy){

            this.enemy.getShot(position, params.tileState.hit);
            const board = structuredClone(this.enemy.board);
            return board;

        }else{
            console.log(`There is no such player as ${whichBoard}`);
        }
    }

}
export default gameMenager;

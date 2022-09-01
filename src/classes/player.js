import Tile from "../classes/tile";
import server from "./server";
import Point from "./point";
import Ship from "./ship"
const params = server.Params;

class Player {
    constructor(name){
        this.board = server.getClasicBoard();
        this.SetupBoard();
        this.ships = [];
        this.Ships()
        this.name = name;
        this.boardSize = 10;
        this.currentShipSize = 0;
    }
    Ships() { 
        this.ships = [
            new Ship(2, 4),
            new Ship(3,  3),
            new Ship(4, 2),
            new Ship(5, 1)
        ];
    }

    SetupBoard = () =>{
        for(let i = 1; i < this.board.length; ++i){
            for(let j = 1; j < this.board[i].length; ++j){          
                this.board[i][j] = new Tile(new Point(i,j), server.Params.tileState.empty);
            }
        }
    
    }
    ChangeTile = (position, newTileState) =>{
        for (let state in server.Params.tileState) {
            if(state === newTileState){
                this.board[position.x][position.y].tileState = newTileState
                return true;
            }
        }
        return false;
    }
    getShoot = (whichBoard, position) =>{
        if(whichBoard === this.name){
            this.ChangeTile(position, server.Params.tileState.hit);
            return true;
        }else{
            console.log(`There is no such player as ${whichBoard}`);
        }           

    }
    PutShip = (whichBoard, position) =>{
        if(whichBoard === this.name){

            const allowed = this.ChcekIfPutAllowed(position)

            if(allowed === true){
                this.ChangeTile(position, params.tileState.ship);

            }else if(allowed === server.Params.tileState.ship){

                console.log(this.currentShipSize);
                this.ChangeTile(position, params.tileState.empty);
            }else{
                return false;
            }
            
            this.UpdateNotAllowed();
            return true;

        }else{
            console.log(`There is no such player as ${whichBoard}`);
        }

    }

    //Checking if you can put ship 
    ChcekIfPutAllowed = (position) =>{
        let info = "";
        let x = position.x;
        let y = position.y;
        let state = server.Params.tileState;
        
        if(this.board[x][y].tileState === state.notAllowed){
            return false;
        }

        //Zero depth
        if(this.board[x][y].tileState === state.empty){
            //first depth
            //Check if diagonals are clear
            const diagonal = this.checkDiagonals(x, y);
            if(diagonal === false){
                //Check for ships continuity
                const straight = this.checkStraight(x,y);
                if(straight === false){
                    this.currentShipSize = 1;
                    return true;
                }else{
                    const shipPos = straight;
                    if(this.currentShipSize < this.BiggestShip()){
                        this.currentShipSize++;
                        return true;
                    }else {
                        
                        this.ships[this.FindShipOfSize(this.currentShipSize)]--;
                        this.currentShipSize = 0;
                        return false;
                    }
                }
            }else{
                info = `There are ships nearby at position ${params.abc[diagonal.x]}${diagonal.y}, ships are not allowed to touch on diagonals`;
                console.log(info);
                return false; 
            }
            
        }else if(this.board[x][y].tileState === params.tileState.ship ){
            return params.tileState.ship;
        }else{
            console.log("somethig go wrong");
        }


    }
    UpdateNotAllowed = () =>{

    }
    //Simple tasks methods
    checkDiagonals = (x, y) => {
        //Chceck if diagonals are clear
        

        if(this.isShip(x+1, y+1)){
            return new Point(x+1, y+1);
        }
        if(this.isShip(x+1, y-1)){
            
            return new Point(x+1, y-1);
        }
        if(this.isShip(x-1, y+1)){
            
            return new Point(x-1, y+1);
        }
        if(this.isShip(x-1, y-1)){
            return new Point(x-1, y-1);
        }
        return false;
    }
    checkStraight = (x, y) => {
        //Chceck if diagonals are clear
        

        if(this.isShip(x+1, y))
        {
            return new Point(x+1, y);
        }
        if(this.isShip(x-1, y))
        {
            return new Point(x-1, y);
        }
        if(this.isShip(x, y+1))
        {
            return new Point(x, y+1);
        }
        if(this.isShip(x, y-1))
        {
            return new Point(x, y-1);
        }
        return false;
    }
    isShip = (x, y) => {
        if((x <= 10 && x >= 0) && (y <= 10 && y >= 0)){
            return this.board[x][y].tileState === params.tileState.ship ? true : false;
        }else{
            return false
        }
    }
    BiggestShip = () => {
        let biggestShip = 0;
        for(let ship of this.ships){
            if(ship.count > 0){
                if(ship.size > biggestShip){
                    biggestShip = ship.size;
                }
            }
        }
        return biggestShip;
    }
    FindShipOfSize = (size) =>{
        let indexOfShip = 0;
        for(let ship of this.ships){
            if(ship.size === size){
                return indexOfShip;
            }
            ++indexOfShip;
        }
    }
}
export default Player


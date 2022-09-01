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
    Ships = ()  =>{ 
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

            if(this.board[position.x][position.y].tileState === params.tileState.ship )
                this.UnsetShip(position)
                
            else if(this.ChcekIfPutAllowed(position))
                this.SetShip(position);
                
            //Ship put on the board successfuly, and board is upadated with not allowed states
            this.UpdateNotAllowed(position)
            return true;
        }
        else{
            console.log(`There is no such player as ${whichBoard}`);
            return false;
        }

    }

    //Allowing ships to be set on the board
    ChcekIfPutAllowed = (position) =>{
        let info = "";
        let x = position.x;
        let y = position.y;
        let state = server.Params.tileState;
        
        if(this.board[x][y].tileState === state.notAllowed){
            return false;
        }
        if(this.board[x][y].tileState === state.ship)
            return false;

        //Zero depth
        if(this.board[x][y].tileState === state.empty){
            //first depth
            //Check if diagonals are clear
            const diagonal = this.IterateDiagonals(position,this.CheckTile);
            if(diagonal === false){
                //Check for ships continuity
                const straight = this.IterateStraight(position, this.CheckTile);
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
            
        }else{
            console.log(`somethig go wrong this is not proper state ${this.board[x][y].tileState}`);
            return false;
        }


    }
    UpdateNotAllowed = (position) =>{
        const x = position.x;
        const y = position.y;

        for(let row of this.board){
            for(let tile of row){
                if(tile.tileState === params.tileState.ship){
                    this.IterateDiagonals(tile.point, (point) =>{
                        this.board[point.x][point.y].tileState = params.tileState.notAllowed;
                    });
                }
                else if(tile.tileState === params.tileState.empty){
                    
                }
            }
        }
        

    }
    //Simple tasks methods
    SetShip = (position) => {
        this.ChangeTile(position, params.tileState.ship);
    }
    UnsetShip = (position) => {
        this.ChangeTile(position, params.tileState.empty);
        this.IterateDiagonals(position, (point) =>{
            this.board[point.x][point.y].tileState = params.tileState.empty;
        });
    }
    IterateDiagonals = (point, funk) => {
        const x = point.x;
        const y = point.y;

        //First depth diagonal points
        const  diagonals = [
            new Point(x+1, y+1),
            new Point(x+1, y-1),
            new Point(x-1, y+1),
            new Point(x-1, y-1),
        ];

        return this.DoOnFirstDepth(diagonals, funk);
    }
    IterateStraight = (point, funk) => {
        const x = point.x;
        const y = point.y;

        //First depth straight points
        const  streights = [
            new Point(x, y+1),
            new Point(x, y-1),
            new Point(x+1, y),
            new Point(x-1, y),
        ];
        return this.DoOnFirstDepth(streights,funk);
       
    }
    DoOnFirstDepth = (direction, funk) =>{

        //Perform given funkction on each First depth point
        for(let point of direction) 
            if(this.IfPointOnBoard(point)){
                funk(point);
            }        
        return false;
    }
    CheckTile = (point) =>{
        return this.isShip(point) ? structuredClone(point) : false
    }
    IfPointOnBoard = (point) =>{
        const ifBoard = (point.x <= 10 && point.x >= 1) && (point.y <= 10 && point.y >= 1);
        return ifBoard
    }
    isShip = (point) => {
        if((this.IfPointOnBoard(point))){
            return this.board[point.x][point.y].tileState === params.tileState.ship ? true : false;
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


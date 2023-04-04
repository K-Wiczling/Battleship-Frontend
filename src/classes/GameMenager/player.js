// Imports
import Tile from "./tile";
import server from "../server";
import Point from "../helpers/point";
import Ship from "./ship"
import Outcome from '../helpers/outcome'

// Holds information about player in the game 
class Player {

    // Sortcuts for player class only use
    params = server.Params;
    diag = "diagonal";
    str = "streight";
    
    constructor (name, fleetType, boardSize) {
        this.board = [];
        this.setupBoard(boardSize);
        this.ships = [];
        this.shipsSetup(fleetType);
        this.name = name;
        this.boardSize = 10;
        this.currentShipSize = 0;
        this.insideMesseges = [];
    }
    // Setup how much ships every sizes player should have
    shipsSetup = (fleetType)  => { 
        switch (fleetType) {
            case this.params.fleetType.clasic: {
                this.ships = [
                    new Ship(2, 4), // Ship size 2
                    new Ship(3,  3),  // Ship size 3
                    new Ship(4, 2), // Ship size 4
                    new Ship(5, 1) // Ship size 5
                ];
                break;
            }

            case this.params.fleetType.Long:{
                this.ships = [
                    new Ship(2, 2), // Ship size 2
                    new Ship(3,  3), // Ship size 3
                    new Ship(4, 3), // Ship size 4
                    new Ship(5, 2) // Ship size 5
                ];
                break;
            }
            
            case this.params.fleetType.Short:{
                this.ships = [
                    new Ship(2, 8), // Ship size 2
                    new Ship(3,  4), // Ship size 3
                    new Ship(4, 4), // Ship size 4
                    new Ship(5, 1) // Ship size 5
                ];
                break;
            }
                
            default:
                break;
        }
       
    }

    // Fill the player board with tile classes
    setupBoard = (boardSize) => {
        switch (boardSize) {
            case this.params.boardSize.clasic:{
                this.board =  structuredClone(this.params.clasicBoard);
                break;
            }
            case this.params.boardSize.small:{
                this.board =  structuredClone(this.params.smallBoard);
                break;
            }
            case this.params.boardSize.big:{
                this.board =  structuredClone(this.params.bigBoard);
                break;
            }
                
        
            default:
                break;
        }
        for (let i = 1; i < this.board.length; ++i) {
            for (let j = 1; j < this.board[i].length; ++j) {          
                this.board[i][j] = new Tile(new Point(i,j), this.params.tileState.empty);
            }
        }
    
    }

    // Change state of the single tile
    changeTile = (position, newTileState) => {
        for (let state in this.params.tileState) {
            if (state === newTileState) {
                this.board[position.x][position.y].tileState = newTileState
                return true;
            }
        }
        return false;
    }

    // Runs every time enemy shoot to check if enamy hit something
    getShoot = (whichBoard, position) => {
        if (whichBoard === this.name) {
            this.changeTile(position, this.paramstileState.hit);
            return true;
        } else {
            console.log(`There is no such player as ${whichBoard}`);
        }           

    }

    // When setup mode is active set value of the tile depending on the current state
    setTile = (whichBoard, position) => {
        if (whichBoard === this.name) {
            // Default click is not allowed
            let set = '[Not allowed] at';

            if (this.board[position.x][position.y].tileState === this.params.tileState.ship ){
                set = '[Removed] from';
                this.unsetShip(position)

            } else if (this.chcekIfPutAllowed(position)) {
                set = '[Set] on'
                this.setShip(position);
            }
            
            // Ship put on the board successfuly, and board is upadated with not allowed states
            this.updateNotAllowed(position);
            this.deepCheck();

            // Prepoare message to later be shown in the GameConsole
            let out = Outcome.buildOutcome(true, `Ship is ${set} the position [${this.params.abc[position.x]}${position.y}]`)
           
            return out;
        } else {
            let out = Outcome.buildOutcome(false, `There is no such player as ${whichBoard}`)
            return out;
        }

    }

    // In progress
    // Chacking if placeing a ship on given positon is valid move
    recursiveCheck = (x , y, board, index) => {
        if (board[x, y] === this.params.tileState.empty){
            return 0;
        }
        if (board[x, y] === this.params.tileState.notAllowed){
            return 0;
        }
        if ( board[x + 1] === this.params.tileState.ship) {

            return 1 + this.recursiveCheck(x+1, y, board)
        }
        if ( board[x - 1] === this.params.tileState.ship) {
            return 1 + this.recursiveCheck(x+1, y, board)
        }
        if ( board[y + 1] === this.params.tileState.ship) {
            return 1 + this.recursiveCheck(x+1, y, board)
        }
        if ( board[y - 1] === this.params.tileState.ship) {
            return 1 + this.recursiveCheck(x+1, y, board,)
        }
         
        // tile = 0;
        return 0;
        // this.board[tile.point.x][tile.point.y].tileState = this.params.tileState.notAllowed;
}   
    // Checking if ships are put correctly on the board
    deepCheck = () => {
        let tmpBoard = structuredClone(this.board)
        for (let row of this.board) {
            for (let tile of row) {
                // this.recursiveCheck(tile.point.x, tile.point.y, this.board, 0)
                
            }
        }
    }

    // Allowing ships to be set on the board
    chcekIfPutAllowed = (position) => {
        let info = "";
        let x = position.x;
        let y = position.y;
        let state = this.paramstileState;
        
        if (this.board[x][y].tileState === this.params.tileState.notAllowed) {
            let out = Outcome.buildOutcome(false, '')
            return false;
        }
        if (this.board[x][y].tileState === this.params.tileState.ship)
            return false;
        if (!this.ifPointOnBoard(position)) {
            console.log(`position out of the range x:${this.paramsabc[position.x-1]} y:${position.y}`);
            return false;
        }

        // Zero depth
        if (this.board[x][y].tileState === this.params.tileState.empty) {
            //first depth
            let itterated = true;

            this.iterateAround(position, this.diag, (point) => {
                if (!this.board[point.x][point.y].tileState === this.params.tileState.empty)
                    itterated = false;
            });
            
            // Check if diagonals are clear
            if (itterated) {
                itterated = true;
                this.iterateAround(position, this.str, (point) => {
                    if(this.board[point.x][point.y].tileState === this.params.tileState.ship)
                        itterated = false;
                });

                // If there are no continuity
                if (itterated) {
                    this.currentShipSize = 1;
                    let out = Outcome.buildOutcome(true, "This is the first ship tile in row or column");
                    this.insideMesseges.push(out);
                    return out.result;
                // If continuity exist
                } else {
                    if (this.currentShipSize < this.biggestShip()) {
                        this.currentShipSize++;

                        let out = Outcome.buildOutcome(true, "This is next ship tile in the row or column");
                        this.insideMesseges.push(out);
                        return out.result;
                    } else {
                        this.ships[this.findShipOfSize(this.currentShipSize)]--;
                        this.currentShipSize = 0;

                        let out = Outcome.buildOutcome(true, "This is the first ship tile");
                        this.insideMesseges.push(out);
                        return out.result;
                    }
                }
            } else {
                info = `There are ships nearby the position of 
                    ${this.params.abc[position.x]}${position.y},
                    ships are not allowed on the neerest diagonals`;
                return false; 
            }
            
        } else {
            console.log(`somethig go wrong this is not proper state ${this.board[x][y].tileState}`);
            return false;
        }


    }

    // Itarate throught the board to update if all the not allowed points
    updateNotAllowed = (position) => {
        for (let row of this.board) {
            for (let tile of row) {
                if (tile.tileState === this.params.tileState.ship) {
                    this.iterateAround(tile.point, this.diag, (point) => {
                        this.board[point.x][point.y].tileState = this.params.tileState.notAllowed;
                    });
                }
            }
        }
        return true;
    }

    // Simple tasks methods
    setShip = (position) => {
        this.changeTile(position, this.params.tileState.ship);
    }

    // Remove ship form the board
    unsetShip = (position) => {
        this.changeTile(position, this.params.tileState.empty);
        this.iterateAround(position, this.diag, (point) => {
            this.board[point.x][point.y].tileState = this.params.tileState.empty;
        });
    }

    // Itarate around given point on 
    // All 4 diagonals 
    // All 4 streights
    iterateAround = (point, axies, funk) => {
        const x = point.x;
        const y = point.y;

        // First depth diagonal points
        const  diagonals = [
            new Point(x+1, y+1),
            new Point(x+1, y-1),
            new Point(x-1, y+1),
            new Point(x-1, y-1),
        ];
        // First depth streight points
        const  streights = [
            new Point(x, y+1),
            new Point(x, y-1),
            new Point(x+1, y),
            new Point(x-1, y),
        ];
        let direction; 

        // Set direction of iteration
        if (axies === this.diag) {
            direction = diagonals
        } else if (axies === this.str) {
            direction = streights
        } else {
            console.log(`direction not found${axies}`);
            return false;
        }

        // Iterating al 4 points
        for (let point of direction) {
            if (this.ifPointOnBoard(point)) 
                funk(point)
        }
        return true;
    }

    // Check if given point is inside the game board
    ifPointOnBoard = (point) => {
        const ifBoard = (point.x <= (this.board.length - 1) && point.x >= 1) && (point.y <= (this.board.length - 1) && point.y >= 1);
        return ifBoard
    }

    //Returns biggest ship that can be put on the board
    biggestShip = () => {
        let biggestShip = 0;
        for (let ship of this.ships) {
            if (ship.count > 0) {
                if (ship.size > biggestShip) 
                    biggestShip = ship.size;
            }
        }
        return biggestShip;
    }
    //Get the index of the ship with the given size
    findShipOfSize = (size) => {
        let indexOfShip = 0;
        for (let ship of this.ships) {
            if (ship.size === size)
                return indexOfShip;
            ++indexOfShip;
        }
    }

}
export default Player


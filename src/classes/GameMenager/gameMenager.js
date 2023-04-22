// Imports
import Player from "./player";
import server from "../server";
import Validate from "../validate";

// Extract Params from the server class
const params = server.Params;

// Entry point for all the things corelated with the game itself on the model side
class GameMenager {
    constructor() {
        // Singletone
        if (GameMenager.exists)
            return GameMenager.instance;

        // Setup parameters 
        this.playerType = params.enemyTpes.AI;
        this.aiDifficulty = params.aiDifficulty.easy;
        this.fleetType = params.fleetType.clasic;
        this.boardSize = params.boardSize.clasic;
        this.randomShipsSetup = false;

        // Hold Refrence to the bptch players
        this.player = null;
        this.enemy = null;

        this.validate = new Validate();
        this.gameState = params.gameState.setup;

        // Singletone
        GameMenager.exists = true;
        GameMenager.instance = this;
        return this;
    }

    // Start all the game content
    setupTheGame = (setup) => {
        this.playerType = setup.enemyTypes;
        this.aiDifficulty = setup.aiDifficulty;
        this.fleetType = setup.fleetType;
        this.boardSize = setup.boardSize;
        this.randomShipsSetup = setup.randomSetupShips;
        this.player = new Player(params.players.player, this.fleetType, this.boardSize);
        this.enemy = new Player(params.players.enemy, this.fleetType, this.boardSize);
    }

    // Runs whenever somthing happens in the game
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

    // Pending - waiting for implementation
    preState = () => {

    }

    // Pending - waiting for implementation
    setupState = () => {
        if (this.gameState !== params.gameState.setup) {
            return false;
        }
        return true;

    }

    // Pending - waiting for implementation
    gameState = () => {

    }

    // Pending - waiting for implementation
    endState = () => {

    }

    // Pending - waiting for implementation
    // Run when player leave the game before end
    leaveTheGame = () => {
        console.log("player run from the game");
    }

    // Returns:
    // true - putting a ship is posible and ship is palced on the board
    // false - putting a ship is NOT posible  
    clickedBoard = (whichBoard, position) => {
        if (this.validate.validateBoardClick(whichBoard, position, (this.player.board.length - 1))) {

            if (this.gameState === params.gameState.game) {
                // Shooting only allowed in game and only on the enemy board
                return this.enemy.getShoot(whichBoard, position)

            } else if (this.gameState === params.gameState.setup){
                // Put ship tile on the board
                return this.player.setTile(whichBoard, position);
            }
        }
    }



}
const gm = new GameMenager();
export default gm;
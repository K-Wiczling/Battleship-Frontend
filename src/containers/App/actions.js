import server from "../../classes/server";
import { 
    CHANGE_MODE, 
    SETUP_GAME_FULL,
    SETUP_GAME_ENEMY_TYPE,
    SETUP_GAME_AI_DIFFICULTY,
    SETUP_GAME_FLEET_TYPE,
    SETUP_GAME_BOARD_SIZE, 
    SETUP_GAME_RANDOM} from "./constants";

//Change game state
export const changeModes = (mode) => ({
    type: CHANGE_MODE,
    payload: mode
});

//Setup game 
export const setupGame = (
    enemyType = server.Params.enemyTpes.AI,
    aiDifficulty = server.Params.aiDifficulty.easy,
    fleetType = server.Params.fleetType.clasic,
    boardSize = server.Params.boardSize.clasic
    ) => ({
    type: SETUP_GAME_FULL,
    payload: {
        enemyType: enemyType,
        aiDifficulty: aiDifficulty,
        fleetType: fleetType,
        boardSize: boardSize
    }
});

export const setupEnemyType = (enemyType = server.Params.enemyTpes.AI) => ({
    type: SETUP_GAME_ENEMY_TYPE,
    payload: enemyType
 
});

export const setupAiDifficulty = (aiDifficulty = server.Params.aiDifficulty.easy) => ({
    type: SETUP_GAME_AI_DIFFICULTY,
    payload: aiDifficulty

});

export const setupFleetType = (fleetType = server.Params.fleetType.clasic) => ({
    type: SETUP_GAME_FLEET_TYPE,
    payload: fleetType
    
});

export const setupBoardSize = (boardSize = server.Params.boardSize.clasic) => ({
    type: SETUP_GAME_BOARD_SIZE,
    payload: boardSize
});

export const setupRandomShips = (isRandom = false) => ({
    type: SETUP_GAME_RANDOM,
    payload: isRandom
});

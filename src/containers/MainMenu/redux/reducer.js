import server from "../../../classes/server";

import { 
    SETUP_GAME_FULL,
    SETUP_GAME_ENEMY_TYPE,
    SETUP_GAME_AI_DIFFICULTY,
    SETUP_GAME_FLEET_TYPE,
    SETUP_GAME_BOARD_SIZE, 
    SETUP_GAME_RANDOM,
    } from "./constants";

// Information for the GameMenager to start game
const gameSetupState = {
    enemyType: server.Params.enemyTpes.AI,
    aiDifficulty: server.Params.aiDifficulty.easy,
    fleetType: server.Params.fleetType.clasic,
    boardSize: server.Params.boardSize.clasic,
    randomSetupShips: false
}
export const setupGameParameters = (state=gameSetupState, action={}) => {
    switch (action.type) {
        case SETUP_GAME_FULL:
            return Object.assign({}, state, { 
                enemyType: action.payload.enemyTpes,
                aiDifficulty: action.payload.aiDifficulty,
                fleetType: action.payload.fleetType,
                boardSize: action.payload.boardSize
             });
             
        case SETUP_GAME_ENEMY_TYPE: return Object.assign({}, state, { enemyType: action.payload});
        case SETUP_GAME_AI_DIFFICULTY: return Object.assign({}, state, { aiDifficulty: action.payload});
        case SETUP_GAME_FLEET_TYPE: return Object.assign({}, state, { fleetType: action.payload});
        case SETUP_GAME_BOARD_SIZE: return Object.assign({}, state, { boardSize: action.payload});
        case SETUP_GAME_RANDOM: return Object.assign({}, state, { randomSetupShips: action.payload});
        
        default:
            return state;
    }
}
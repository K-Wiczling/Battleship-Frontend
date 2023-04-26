import server from "../../classes/server";
import { 
    CHANGE_MODE, 
    MODE_GAME, 
    MODE_MAIN_MENU, 
    MODE_WEBSITE, 
    SETUP_GAME_AI_DIFFICULTY, 
    SETUP_GAME_BOARD_SIZE, 
    SETUP_GAME_ENEMY_TYPE, 
    SETUP_GAME_FLEET_TYPE, 
    SETUP_GAME_FULL, 
    SETUP_GAME_RANDOM,
    SET_USER,
} from "./constants";

const  initialModeState = {
    mode: MODE_WEBSITE,
}
// Change game state
export const changeMode = (state=initialModeState, action={}) => {
    switch (action.type) {
        case CHANGE_MODE:
            return Object.assign({}, state, { mode: action.payload })
        default:
            return state
    }
}

// Information for the GameMenager to start game
const gameSetupState = {
    enemyType: server.Params.enemyTpes.AI,
    aiDifficulty: server.Params.aiDifficulty.easy,
    fleetType: server.Params.fleetType.clasic,
    boardSize: server.Params.boardSize.clasic,
    randomSetupShips: false
}
export const setupGame = (state=gameSetupState, action={}) => {
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
const initialUserData = {
    name: 'name',
    joined: 'now'

}
export const userData = (state = initialUserData, action={}) => {
    switch (action.type) {
        case SET_USER: return Object.assign({}, state, action.payload);
           
        default:
            return state;
    }
}
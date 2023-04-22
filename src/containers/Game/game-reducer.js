import server from "../../classes/server";
import Timing from "../../classes/helpers/timing";
import { 
    UPDATE_PLAYER_BOARD, 
    UPDATE_ENEMY_BOARD, 
    INSERT_IN_GAME_CONSOLE, 
    UPDATE_BOTH_BOARDS,
    TOGGLE_IN_GAME_MENU,
} from "./game-constants";

const params = server.Params

// Manipulations on the player and enemy board
const  initialGameState = {
    gameMenager:{},
    playerBoard: [],
    enemyBoard: []
}
export const changeBoard = (state=initialGameState, action={}) => {
    switch (action.type) {
        case UPDATE_BOTH_BOARDS: 
            return Object.assign({}, state, { playerBoard: action.payload.player, enemyBoard: action.payload.enemy })

        case UPDATE_PLAYER_BOARD:
            return Object.assign({}, state, { playerBoard: action.payload })

        case UPDATE_ENEMY_BOARD:
            return Object.assign({}, state, { enemyBoard: action.payload })

        default:
            return state
    }
}

// Manipulations on the GameConosole
const initialGameConsoleState = {
    log: [{
            id: 0,
            consoleTime: Timing.getCurrentTime(),
            consoleText: `Let's the game begin`,
            messageSender: params.gameConsoleSenderType.game,
            messageType: params.gameConsoleMessageTypes.info,
        }]
}
export const changeGameConsole = (state=initialGameConsoleState, action={}) =>{
    switch (action.type) {
        case INSERT_IN_GAME_CONSOLE:{
            action.payload.id = state.log.length
            return { 
                ...state,
                log: [action.payload, ...state.log ]
            }
        }
        default:
            return state;
    }
}

// In game manu
const  initialInGameMenuState = {
    menuVisibility: false,
}

export const inGameMenu = (state=initialInGameMenuState, action={}) => {
    switch (action.type) {
        case TOGGLE_IN_GAME_MENU: 
            return Object.assign({}, state, { menuVisibility: !state.menuVisibility })

        default:
            return state
    }
}

import { UPDATE_PLAYER_BOARD, UPDATE_ENEMY_BOARD, INSERT_IN_GAME_CONSOLE, UPDATE_BOTH_BOARDS } from "./game-constants";

const  initialGameState = {
    playerBoard: [],
    enemyBoard: []
}
export const changeBoard = (state=initialGameState, action={}) => {
    switch (action.type) {
        case UPDATE_BOTH_BOARDS: 
            return Object.assign({}, state, {playerBoard: action.payload.player, enemyBoard: action.payload.enemy})
            
        case UPDATE_PLAYER_BOARD:
            return Object.assign({}, state, {playerBoard: action.payload} )

        case UPDATE_ENEMY_BOARD:
            return Object.assign({}, state, {enemyBoard: action.payload} )

        default:
            return state
    }
}


const initialGameConsoleState = {
    consoleTime: "",
    consoleText: 'trhfhester...'
}
export const changeGameConsole = (state=initialGameConsoleState, action={}) =>{
    switch (action.type) {
        case INSERT_IN_GAME_CONSOLE:
            return Object.assign({}, state, {consoleText: action.payload.text, consoleTime: action.payload.time})
        
        default:
            return state;
    }
}
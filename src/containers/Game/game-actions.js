import { 
    UPDATE_PLAYER_BOARD, 
    UPDATE_ENEMY_BOARD, 
    INSERT_IN_GAME_CONSOLE 
} from "./game-constants";

//Player setup actions
export const tileClickPlayerBoard = (board) => ({
    type: UPDATE_PLAYER_BOARD,
    payload: board
});

//Player setup actions
export const tileClickEnemyBoard = (board) => ({
    type: UPDATE_ENEMY_BOARD,
    payload: board
});

export const insertInGameConsole = (text, time) =>({
    type: INSERT_IN_GAME_CONSOLE,
    payload: {
        text: text, 
        time: time
    }
});
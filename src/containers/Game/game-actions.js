import { 
    UPDATE_PLAYER_BOARD, 
    UPDATE_ENEMY_BOARD, 
    INSERT_IN_GAME_CONSOLE,
    UPDATE_BOTH_BOARDS
} from "./game-constants";

//Player setup actions
export const tileClickPlayerBoard = (board) => ({
    type: UPDATE_PLAYER_BOARD,
    payload: structuredClone(board)
});

//Player setup actions
export const tileClickEnemyBoard = (board) => ({
    type: UPDATE_ENEMY_BOARD,
    payload: structuredClone(board)
});

export const insertInGameConsole = (text, time) =>({
    type: INSERT_IN_GAME_CONSOLE,
    payload: {
        text: text, 
        time: time
    }
});

export const fillBothBoards = (player, enemy) =>({
    type: UPDATE_BOTH_BOARDS,
    payload: {
        player: structuredClone(player), 
        enemy: structuredClone(enemy)
    }
});
import server from "../../classes/server";
import Timing from "../../classes/timing";
import { 
    UPDATE_PLAYER_BOARD, 
    UPDATE_ENEMY_BOARD, 
    INSERT_IN_GAME_CONSOLE,
    UPDATE_BOTH_BOARDS,
    SETUP_GAME
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

export const insertInGameConsole = (
    message="Game is working",
    type=server.Params.gameConsoleMessageTypes.info, 
    sender=server.Params.gameConsoleSenderType.game
) =>{
    return {
        type: INSERT_IN_GAME_CONSOLE,
        payload: {
            id: 0,
            consoleTime: Timing.getCurrentTime(),
            messageType: type,
            messageSender: sender,
            consoleText: message,
        }
    }
};

export const fillBothBoards = (player, enemy) =>({
    type: UPDATE_BOTH_BOARDS,
    payload: {
        player: structuredClone(player), 
        enemy: structuredClone(enemy)
    }
});
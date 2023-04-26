import server from "../../classes/server";
import Timing from "../../classes/helpers/timing";
import { 
    UPDATE_PLAYER_BOARD, 
    UPDATE_ENEMY_BOARD, 
    INSERT_IN_GAME_CONSOLE,
    UPDATE_BOTH_BOARDS,
    SETUP_GAME,
    TOGGLE_IN_GAME_MENU
} from "./constants";

// Player setup actions
export const tileClickPlayerBoard = (board) => ({
        type: UPDATE_PLAYER_BOARD,
        payload: structuredClone(board)
});

// Enemy click actions
export const tileClickEnemyBoard = (board) => ({
        type: UPDATE_ENEMY_BOARD,
        payload: structuredClone(board)
});

// Add log message to the stack of the logs
export const insertInGameConsole = (
    message="Game is working",
    type=server.Params.gameConsoleMessageTypes.info, 
    sender=server.Params.gameConsoleSenderType.game
) => {
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

// Setpup borads with information from the GameMenager
export const fillBothBoards = (player, enemy) => ({
    type: UPDATE_BOTH_BOARDS,
    payload: {
        player: structuredClone(player), 
        enemy: structuredClone(enemy)
    }
});

// Toggle the in game menu
export const toggleInGameMenu = () => ({
    type: TOGGLE_IN_GAME_MENU,
});
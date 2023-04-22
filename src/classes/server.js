// Temporary stored in frontend later fetch from the server
const globalParam = {

    // All states that game can by in 
    modes: {
        splash: "mode-splash",
        menu: "mode-menu",
        game: "mode-game"
    },

    // Standar nameing for player and enemy
    players: {
        player: "player",
        enemy: "enemy"
    },

    // Posible enemy types
    enemyTpes: {
        AI: 'enemyTypeAI',
        Multi: 'enemyTypeMulti'
    },

    // AI Difficulty levels
    aiDifficulty: {
        none: 'aiDifficultyNone', //Multiplayer
        easy: 'aiDifficultyEasy',
        medium: 'aiDifficultyMedium',
        hard: 'aiDifficultyHard',
    },

    // What kind of fleet player want to play with
    fleetType: {
        clasic: 'fleetTypeClasic',
        Long: 'fleetTypeLong',
        Short: 'fleetTypeShort'
    },

    // Board sizes
    boardSize: {
        clasic: 'boardSizeClasic-10x10',
        small: 'boardSizeSmall-5x5',
        big: 'boardSizeBig-15x15',
    },

    // All posible states that Tile can be at
    tileState: {
        hit: "hit",
        empty: "empty",
        hitted: "hitted",
        ship: "ship",
        notAllowed: "notAllowed"
    },

    // Clasic 10x10 game field for drawing
    clasicBoard: [
        ['x', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        ['A', '', '', '', '', '', '', '', '', '', ''],
        ['B', '', '', '', '', '', '', '', '', '', ''],
        ['C', '', '', '', '', '', '', '', '', '', ''],
        ['D', '', '', '', '', '', '', '', '', '', ''],
        ['E', '', '', '', '', '', '', '', '', '', ''],
        ['F', '', '', '', '', '', '', '', '', '', ''],
        ['G', '', '', '', '', '', '', '', '', '', ''],
        ['H', '', '', '', '', '', '', '', '', '', ''],
        ['I', '', '', '', '', '', '', '', '', '', ''],
        ['J', '', '', '', '', '', '', '', '', '', ''],
    ],
    // Small 5x5 game field for drawing
    smallBoard: [
        ['x', 1, 2, 3, 4, 5],
        ['A', '', '', '', '', ''],
        ['B', '', '', '', '', ''],
        ['C', '', '', '', '', ''],
        ['D', '', '', '', '', ''],
        ['E', '', '', '', '', ''],

    ],
    // Big 15x15 game field for drawing
    bigBoard: [
        ['x', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        ['A', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['B', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['C', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['D', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['E', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['F', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['G', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['H', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['I', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['J', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['K', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['L', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['M', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['N', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        ['O', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    ],
    // Transition table to change the Position from (x,y) to ([letter][nuber]) exaple [A1]
    abc: ["X", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 'K', 'L', 'M', 'N', 'O'],

    // Standard game states 
    gameState: {
        pre: "pre",
        setup: "setup",
        game: "game",
        end: "end"
    },

    // Type of console messeges 
    gameConsoleMessageTypes: {
        info: 'consoleTypeInfo',
        warning: 'consoleTypeWarning',
        error: 'consoleTypeError',
        enemy: 'consoleTypeEnemy',
        player: 'consoleTypePlayer'
    },

    // Type of console sender 
    gameConsoleSenderType: {
        game: 'Game',
        system: 'System',
        enemy: 'Enemy',
        plyer: 'Player'
    }

}
// Singletone Class
// Hold all the information required for the game to be setup correctly
class Server {
    constructor() {
        // Singleton
        if (Server.exists)
            return Server.instance;

        this.Params = this.fetchGlobalParams();
        this.serverURL = 'http://localhost:3001/';

        // Singleton
        return this;
    }
    // In the future method will fetch from API 
    fetchGlobalParams = () => {
        return structuredClone(globalParam);
    }

    // Make Post API request to the server
    async send(dataToSend, path) {
        try {
            const response = await fetch(this.serverURL + path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });
            const data = await response.json();
            return data;
        } catch (error) {
            return error;
        }
    }
}
// Return created object rather then a class
const server = new Server();
export default server;



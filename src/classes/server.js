const globalParam = {
    
    //All states that game can by in 
    modes : {
        splash: "mode-splash",
        menu: "mode-menu",
        game: "mode-game"
    },

    //standar nameing for player and enemy
    players : {
        player: "player",
        enemy: "enemy"
    },

    //All posible states that Tile can be at
    tileState : {
        hit: "hit",
        empty: "empty",
        hitted: "hitted",
        ship: "ship",
        notAllowed: "notAllowed"
    },
    
    // Clasic 10x10 game field for drawing
    clasicBoard: [
        ['x',1,2,3,4,5,6,7,8,9,10],
        ['A','','','','','','','','','',''],
        ['B','','','','','','','','','',''],
        ['C','','','','','','','','','',''],
        ['D','','','','','','','','','',''],
        ['E','','','','','','','','','',''],
        ['F','','','','','','','','','',''],
        ['G','','','','','','','','','',''],
        ['H','','','','','','','','','',''],
        ['I','','','','','','','','','',''],
        ['J','','','','','','','','','',''],
      ],
    
    //Transition table to change the Position from (x,y) to ([letter][nuber]) exaple [A1]
    abc: ["X", "A", "B" , "C", "D", "E", "F", "G", "H", "I", "J"],

    //Standard game states 
    gameState: {
        pre: "pre",
        setup: "setup",
        game: "game",
        end: "end"
    },

    //Type of console messeges 
    gameConsoleMessageTypes: {
        info: 'consoleTypeInfo',
        warning: 'consoleTypeWarning',
        error: 'consoleTypeError',
        enemy: 'consoleTypeEnemy',
        player: 'consoleTypePlayer'
    },

    //Type of console sender 
    gameConsoleSenderType: {
        game: 'Game',
        system: 'System',
        enemy: 'Enemy',
        plyer: 'Player'
    }

}
//Singletone Class
//Hold all the information required for the game to be setup correctly
class Server {
    constructor() {
        if (Server.exists)
            return Server.instance;
            
        this.Params = this.fetchGlobalParams();
        return this;
    }
    //In the future method will fetch from API 
    fetchGlobalParams = () => {
        return structuredClone(globalParam);
    }
 }
const server = new Server();
export default server;

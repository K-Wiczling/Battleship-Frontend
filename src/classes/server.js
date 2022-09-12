const globalParam = {
 
    modes : {
        splash: "mode-splash",
        menu: "mode-menu",
        game: "mode-game"
    },
    players : {
        player: "player",
        enemy: "enemy"
    },
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
      
    abc: ["X", "A", "B" , "C", "D", "E", "F", "G", "H", "I", "J"],
    gameState: {
        pre: "pre",
        setup: "setup",
        game: "game",
        end: "end"
    }

}

class Server {
    constructor(){
        this.Params = this.fetchGlobalParams();
    }

    fetchGlobalParams = () =>{
        return structuredClone(globalParam);
    }
    getClasicBoard = () =>{
        return structuredClone(this.Params.clasicBoard);
    }
    
    getModes = () =>{
        return structuredClone(this.Params.modes);
    }
    getPlayers = () =>{
        return structuredClone(this.Params.players);
    }
    getTileState = () =>{
        return structuredClone(this.Params.tileState);
    }
    getAbc= () => {
        return structuredClone(this.Params.abc);
    }
 }

const server = new Server();
export default server;

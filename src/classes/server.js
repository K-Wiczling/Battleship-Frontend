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
        ship: "ship"
    },
    
    // Clasic 10x10 game field for drawing
    clasicBoard: [
        ['x',1,2,3,4,5,6,7,8,9,10],
        ['A','o','o','o','o','o','o','o','o','o','o'],
        ['B','o','o','o','o','o','o','o','o','o','o'],
        ['C','o','o','o','o','o','o','o','o','o','o'],
        ['D','o','o','o','o','o','o','o','o','o','o'],
        ['E','o','o','o','o','o','o','o','o','o','o'],
        ['F','o','o','o','o','o','o','o','o','o','o'],
        ['G','o','o','o','o','o','o','o','o','o','o'],
        ['H','o','o','o','o','o','o','o','o','o','o'],
        ['I','o','o','o','o','o','o','o','o','o','o'],
        ['J','o','o','o','o','o','o','o','o','o','o'],
      ],
    clasicBoardPlayer: [
    [null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null,null],
    ],

      
    abc: ["X", "A", "B" , "C", "D", "E", "F", "G", "H", "I", "J"]
}


class Server {
    constructor(){
        this.Params = this.fetchGlobalParams();
    }
    fetchGlobalParams(){
        return globalParam;
    }
    getClasicBoard = () =>{
        return this.Params.clasicBoard;
    }
    getClasicBoardPlayer = () => {
        return this.Params.clasicBoardPlayer;
    }
    getModes = () =>{
        return this.Params.modes;
    }
    getPlayers = () =>{
        return this.Params.players;
    }
    getTileState = () =>{
        return this.Params.tileState;
    }
    getAbc= () => {
        return this.Params.abc;
    }
 }

const server = new Server();
export default server;

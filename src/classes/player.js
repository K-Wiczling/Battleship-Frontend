class Player {
    constructor(name){
        this.board = [];
        this.name = name;
        this.boardSize = 10
    }
    SetupBoard(){
        for (let i = 0; i < this.boardSize; i++) {
            for (let j = 0; j < this.boardSize; j++){
                this.board[i][j] = new Tile(new Point(i,j,))
            }
        }
    }
}


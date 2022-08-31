class Tile {
    constructor(point, state, tileStates){
        this.pos = point;
        this.tileStates = tileStates;
        this.tileState = state;
    }
    ChangeState = (newTileState) =>{
        this.Checkstate(newTileState) ? this.tileState = newTileState : console.log("tile state unknown");
    }
    Checkstate = (toCompare) =>{ 
        for (let s in this.tileStates) { return s === toCompare ? true : false; }
    }

}
export default Tile;
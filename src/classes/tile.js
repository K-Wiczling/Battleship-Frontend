import { tileState } from "./globalParam";

class Tile {
    constructor(point, state){
        this.pos = point;
        this.tileState = state;
    }
    ChangeState = (newTileState) =>{
        this.Checktate(newTileState) ? this.tileState = newTileState : console.log("tile state unknown");
    }
    Checktate = (toCompare) =>{ 
        for (let s in tileState) { return s === toCompare ? true : false; }
    }

}
export default Tile;
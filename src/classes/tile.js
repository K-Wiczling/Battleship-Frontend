import { compareTileState } from "./globalParam";

class Tile {
    constructor(point, state){
        this.pos = point;
        this.tielState = state;
    }
    ChangeState = (newTileState) =>{
        if(this.Checktate(newTileState)){
            this.tielState = newTileState;
        }else{
            console.error("tile state dose not exist");
        }
    }
    Checktate = (toCompare) =>{
        let result = 0;
        result += compareTileState.filter(c =>{
            if(toCompare === c) {
               return 1;
            }
        })
        return result === 1 ? true : false
        
    }

}
export default Tile;
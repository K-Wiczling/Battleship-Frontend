class Tile {
    constructor(point){
        this.x = point.x;
        this.y = point.y;
        this.state = 0;
    }
    ChangeState(newState){
        this.state = newState;
    }
    StateConventer(){
        switch (this.state) {
            case 0:{
                return "empty";
            }
            
            case 1:{
                return "Ship";
            }
            case 2:{
                return "hited";
            }
            case 4:{
                return "empty-hit";
            }
        
            default:
                break;
        }
    }
}
export default Tile;
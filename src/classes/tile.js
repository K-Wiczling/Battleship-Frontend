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
                break;
            }
            
            case 1:{
                return "Ship";
                break;
            }
            case 2:{
                return "hited";
                break;
            }
            case 4:{
                return "empty-hit";
                break;
            }
        
            default:
                break;
        }
    }
}
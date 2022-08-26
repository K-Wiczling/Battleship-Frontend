//Class to store position of the click
import { TestLog } from "./test";
export default class Point {
    constructor(x, y, player, abc) {
      this.x = x;
      this.y = y;
      this.player = player
      this.conversionTable = abc;
      this.Convert();
    }
    //converting input to 0-9
    Convert(){
        let i = 0;
        this.conversionTable.forEach(item =>{
            if(this.x === item){
                this.x = i-1;
            }
            ++i;
        })

    }
    //DEBUGING
    Show(){
        TestLog(this.player + " player: (X: " + this.x + "; Y: " + this.y + ") ");
    }
  }
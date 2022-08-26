//Class to store position of the click
export default class Point {
    constructor(x, y, player, abc) {
      this.x = x;
      this.y = y;
      this.conversionTable = abc = ["X", "A", "B" , "C", "D", "E", "F", "G", "H", "I", "J"];
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
  }
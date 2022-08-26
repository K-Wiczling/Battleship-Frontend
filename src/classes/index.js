import _ from 'lodash';
import {validateGridInput} from './validate.js';
import {drawGrid} from './drawing.js';
import Point from './point.js';
import {SetupBoard} from './gameMenager.js';

let ownGrid;
let enemyGrid;
const abc = ["X", "A", "B" , "C", "D", "E", "F", "G", "H", "I", "J"];
const enemyGridHolder = document.getElementById("enemy-grid");
const ownGridHolder = document.getElementById("own-grid");

const CilckGrid = (event) =>{
    let point = new Point(event.target.id[0], event.target.id[1], event.target.id.substr(2),  abc )
    try{
        if(validateGridInput(point)){
            point.Show();
        }else{
            throw "Not a valid input";
        }
    }catch (err){
        // console.log(err);
    }
}
// Drawing bords for Player and Enemy
enemyGridHolder.innerHTML = drawGrid("enemy", abc);
ownGridHolder.innerHTML = drawGrid("own", abc);

//Listening to board clicks
document.getElementById("own-grid").addEventListener("click",  CilckGrid);
document.getElementById("enemy-grid").addEventListener("click",  CilckGrid);










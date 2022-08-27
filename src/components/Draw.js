import React from 'react';
import Point from '../classes/point';
import "./css/Draw.css"
import Tile from './Tile';

const board = [
  [1,2,3,4,5,6,7,8,9,10,11],
  [1,2,3,4,5,6,7,8,9,10,11],
  [1,2,3,4,5,6,7,8,9,10,11],
  [1,2,3,4,5,6,7,8,9,10,11],
  [1,2,3,4,5,6,7,8,9,10,11],
  [1,2,3,4,5,6,7,8,9,10,11],
  [1,2,3,4,5,6,7,8,9,10,11],
  [1,2,3,4,5,6,7,8,9,10,11],
  [1,2,3,4,5,6,7,8,9,10,11],
  [1,2,3,4,5,6,7,8,9,10,11],
  [1,2,3,4,5,6,7,8,9,10,11]
];
const abc = ["X", "A", "B" , "C", "D", "E", "F", "G", "H", "I", "J"];
const  Draw =({whichBoard, onTileClick}) => {
    
    
  return (
    <div className='board'>
      {
        board.map((r, i) => {
          return(
            <div className='board-row' key={`row${i}`}>
              { 
                r.map((d, j) =>{
                  let k = `${i}r${j}`;

                  let insert = " ";
                  if(i === 0 && j === 0){
                    insert =  abc[i];
                  }else if(i === 0 && j !== 0 ){
                    insert =  j;
                  }else if(i !== 0 && j === 0 ){
                    insert =  abc[i];
                  }else{
                    insert = `${i}${j}`;
                  }
                  let tileAtributes = {
                    position: new Point(i,j),
                    whichBoard: whichBoard
                  };
                  return (
                    <Tile key={k} tile={tileAtributes} onClick={ onTileClick}>
                      <span>{insert}</span>
                    </Tile>
                  )
                }) 
              } 
            </div>
          )
        })
      }
    </div>
  );
}
export default Draw;

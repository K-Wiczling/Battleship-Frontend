//css
import "./css/Draw.css"
// react stuff
import React from 'react';
//Components
import Tile from './Tile';
//classes
import Point from '../classes/point';

const  Draw =({whichBoard, onTileClick, board}) => {  
  
  let insert = "";
  return (
    <div className='board'>
      {
        board.map((r, i) => {
          return(
            <div className='board-row' key={`row${i}`}>
              { 
                r.map((d, j) =>{
                  let k = `${i}r${j}`;

                  insert = board[i][j];
                  
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

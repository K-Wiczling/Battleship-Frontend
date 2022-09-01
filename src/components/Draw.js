//css
import "./css/Draw.css"
// react stuff
import React from 'react';
//Components
import Tile from './Tile';
//classes
import Point from '../classes/point';
import EmptyTile from "./EmptyTile";
import server from "../classes/server";

const  Draw =({whichBoard, onTileClick, board}) => {  
  
  let insert = "";
  return (
    <div className='board'>
      {
        board.map((row, i) => {
          return(
            <div className='board-row' key={`row${i}`}>
              { 
                row.map((cell, j) =>{
                  
                  //idywidual key value for list components
                  let key = `${i}r${j}`;
                  
                  //Atributes passed down to Tile component
                  let tileAtributes = {
                    position: new Point(i,j),
                    whichBoard: whichBoard
                  };
                  
                  // For the first row and first column (cordinates) use EmptyTile component, ---> 
                  if(i === 0 || j === 0){
                    insert = board[i][j];
                    if(i === 0 && j === 0) insert = "";
                    return (
                      <EmptyTile key={key} tile={tileAtributes} className="EmptyTile" >
                        <span>{insert}</span>
                      </EmptyTile>
                    )

                   // ---> for the rest tile uses Tile component 
                  }else{

                    //Choose style class for the tile based on the tileState value
                    const ts = server.Params.tileState;
                    switch (board[i][j].tileState) {
                      case ts.empty:{
                        return (
                          <Tile key={key} tile={tileAtributes} onClick={ onTileClick} className="tile">
                            <span></span>
                          </Tile>
                        )
                      }
                        
                      case ts.hit:{
                        return (
                          <Tile key={key} tile={tileAtributes} onClick={ () =>{}} className="tile">
                            <span>X</span>
                          </Tile>
                        )
                      }
                      
                      case ts.hitted:{

                        return (
                          <Tile key={key} tile={tileAtributes} onClick={  () =>{}} className="tile">
                            <span>X</span>
                          </Tile>
                        )
                      }
                      
                      case ts.ship:{

                        return (
                          <Tile key={key} tile={tileAtributes} onClick={ onTileClick} className="tile">
                            <span>#</span>
                          </Tile>
                        )
                      }
                      case ts.notAllowed:{

                        return (
                          <Tile key={key} tile={tileAtributes} onClick={ onTileClick} className="tile">
                            <span>-</span>
                          </Tile>
                        )
                      }
                      
                    
                      default:
                        break;
                    }
                    
                    
                  }
                  
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

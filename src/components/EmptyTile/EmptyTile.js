//css
import "./Tile.css"

//Recat
import React from 'react';

//Component for empty tile
const  EmptyTile = (props) => {
  return (
        <div className='tile EmptyTile' >
            {props.children}
        </div>
  );
}
export default EmptyTile;

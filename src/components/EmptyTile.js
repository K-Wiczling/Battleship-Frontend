import React from 'react';
import "./css/Tile.css"

const  EmptyTile =(props) => {
  return (
        <div className='tile EmptyTile' >
            {props.children}
        </div>
  );
}
export default EmptyTile;

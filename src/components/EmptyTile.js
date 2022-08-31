import React from 'react';
import "./css/Tile.css"

const  EmptyTile =(props) => {
  return (
        <div className='tile empty' style={{ fontWeight:'bold' }} >
            {props.children}
        </div>
  );
}
export default EmptyTile;

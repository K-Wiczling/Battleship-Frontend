import React from 'react';
import "./css/Tile.css"

const  Tile =({onClick, tile}) => {
  return (
        <div className='tile' onClick={() => { onClick(tile.whichBoard, tile.position)}}>
            {tile.position.x}<br/>
            {tile.position.y}
        </div>
  );
}
export default Tile;

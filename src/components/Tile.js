import React from 'react';
import "./css/Tile.css"

const  Tile =(props) => {
  return (
        <div className='tile' onClick={() => { props.onClick(props.tile.whichBoard, props.tile.position)}}>
            {props.children}
        </div>
  );
}
export default Tile;

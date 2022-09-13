import React from 'react';
import "./Tile.css"

const  Tile =(props) => {
  return (
        <div className='tile' onClick={() => { props.onClick(props.tile.position)}}>
            {props.children}
        </div>
  );
}
export default Tile;

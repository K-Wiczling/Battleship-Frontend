// css
import "./Tile.css"

// Recat
import React from 'react';

// Empty tile component
const  EmptyTile = ({children}) => {
  return (
        <div className='tile EmptyTile' >
            {children}
        </div>
  );
}
export default EmptyTile;

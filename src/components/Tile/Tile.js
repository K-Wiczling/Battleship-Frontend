import React from 'react';
import "./Tile.css"

import server from '../../classes/server';
import {connect} from "react-redux"
import { insertInGameConsole} from '../../containers/Game/game-actions';
import Timeing from '../../classes/timeing';


const mapStateToProps = (state) =>{
  return {
      consoleText: state.changeGameConsole.consoleText,
      consoleTime: state.changeGameConsole.consoleTime,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
      insertInGameConsole: (text, time) => dispatch(insertInGameConsole(text, time))
  }
}
const  Tile = (props) => {
  return (
        <div 
          className='tile' 
          onClick={() => {
                const t = new Timeing();
            props.onClick(props.tile.position)
            props.insertInGameConsole(`X: ${props.tile.position.x} Y:${props.tile.position.y}`, t.getCurrentTime())
          }}
        >
              {props.children}
        </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps) (Tile);

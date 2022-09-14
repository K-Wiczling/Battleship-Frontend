import React from 'react';
import "./Tile.css"

import server from '../../classes/server';
import {connect} from "react-redux"
import { insertInGameConsole} from '../../containers/Game/game-actions';


const mapStateToProps = (state) =>{
  return {
      consoleText: state.changeGameConsole.consoleText,
      consoleTime: state.changeGameConsole.consoleTime,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
      insertInGameConsole: (msg, sender, info) => dispatch(insertInGameConsole(msg, info, sender))
  }
}
const  Tile = (props) => {
  return (
        <div 
          className='tile' 
          onClick={() => {
            console.log(server.Params.gameConsoleSenderType.game);
            props.onClick(props.tile.position)
            props.insertInGameConsole(
              `X: ${props.tile.position.x} Y:${props.tile.position.y}`,
              server.Params.gameConsoleSenderType.game,
              server.Params.gameConsoleMessageTypes.warning
              )
          }}
        >
              {props.children}
        </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps) (Tile);

import React from 'react';
import "./Tile.css"
import gm from '../../classes/gameMenager'; 


import server from '../../classes/server';
import { connect } from "react-redux"
import { insertInGameConsole, tileClickEnemyBoard, tileClickPlayerBoard} from '../../containers/Game/game-actions';


const mapStateToProps = (state) =>{
  return {
      consoleText: state.changeGameConsole.consoleText,
      consoleTime: state.changeGameConsole.consoleTime,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
      playerTileClick: () => dispatch(tileClickPlayerBoard(gm.player.board)),
      enemyTileClick: () => dispatch(tileClickPlayerBoard(gm.player.board)),

      insertInGameConsole: (msg, sender, info) => dispatch(insertInGameConsole(msg, info, sender))
  }
}
const  Tile = (props) => {
  return (
        <div 
          className='tile' 
          onClick={() => {
            let out = gm.ClickedBoard(props.tile.whichBoard, props.tile.position);
            if (props.tile.whichBoard === server.Params.players.player) {
              if (out.result !== false) {
                props.playerTileClick(props.tile.position)
              }
              
            } else {
              if(out.result !== false) {
                props.enemyTileClick(props.tile.position)
              }
            }

            props.insertInGameConsole(
              out.msg,
              server.Params.gameConsoleSenderType.game,
              server.Params.gameConsoleMessageTypes.info
              )
          }}
        >
              {props.children}
        </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps) (Tile);

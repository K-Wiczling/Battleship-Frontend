import React from 'react';
import "./Tile.css"
import gm from '../../classes/gameMenager'; 


import server from '../../classes/server';
import {connect} from "react-redux"
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
      enemyTileClick: (position) => {
          if(!gm.gameState === server.Params.gameState.setup){
              if(gm.ClickedBoard(server.Params.enemy.player, position)){
                  return dispatch(tileClickEnemyBoard(gm.enemy.board));
              }
          }
      },
      insertInGameConsole: (msg, sender, info) => dispatch(insertInGameConsole(msg, info, sender))
  }
}
const  Tile = (props) => {
  return (
        <div 
          className='tile' 
          onClick={() => {
            if(props.tile.whichBoard === server.Params.players.player){
              if(gm.ClickedBoard(props.tile.whichBoard, props.tile.position)){
                props.playerTileClick(props.tile.position)
              }
              
            } else {
              props.enemyTileClick(props.tile.position)
            }
            props.insertInGameConsole(
              `X: ${props.tile.position.x} Y:${props.tile.position.y} ${gm.getMessage()}`,
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

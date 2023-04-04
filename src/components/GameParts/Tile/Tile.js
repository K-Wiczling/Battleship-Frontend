//css
import "./Tile.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux"
import { insertInGameConsole, tileClickEnemyBoard, tileClickPlayerBoard } from '../../../containers/Game/game-actions';

//Classes
import gm from '../../../classes/GameMenager/gameMenager'; 
import server from '../../../classes/server';


const mapStateToProps = (state) => {
  return {
      consoleText: state.changeGameConsole.consoleText,
      consoleTime: state.changeGameConsole.consoleTime,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      playerTileClick: () => dispatch(tileClickPlayerBoard(gm.player.board)),
      enemyTileClick: () => dispatch(tileClickEnemyBoard(gm.player.board)),

      insertInGameConsole: (msg, sender, info) => dispatch(insertInGameConsole(msg, info, sender))
  }
}

//Represents single tile object grphically
const  Tile = ({tile, tileType, ...props}) => {
  return (
        <div 
          className={'tile ' + tileType} 
          onClick={ () => {

            //Processing the click iside the GameMenager
            let out = gm.clickedBoard(tile.whichBoard, tile.position);
            
            //Player board click
            if (tile.whichBoard === server.Params.players.player) {
              if (out.result !== false)
                props.playerTileClick(tile.position)

            //Enemy board click  
            } else {
              if (out.result !== false)
                props.enemyTileClick(tile.position)
            }

            //Send message to the GameConsole
            props.insertInGameConsole(
              out.msg,
              server.Params.gameConsoleSenderType.game,
              server.Params.gameConsoleMessageTypes.info
              )
          }}
        >
              { props.children }
        </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps) (Tile);

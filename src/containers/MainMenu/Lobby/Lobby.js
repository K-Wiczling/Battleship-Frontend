// Css
import "./Lobby.css"

// React
import React from 'react';
import server from "../../../classes/server";

// Redux
import { connect } from "react-redux";
import { 
    setupEnemyType,
    setupAiDifficulty,
    setupFleetType,
    setupBoardSize,
    setupRandomShips
} from "../../../containers/App/actions"

const mapStateToProps = (state) => {
    return {
      gameSetup: state.setupGame
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        changeEnemyType : (type) => dispatch(setupEnemyType(type)),
        changeAiDifficulty : (diff) => dispatch(setupAiDifficulty(diff)),
        changeFleetType : (type) => dispatch(setupFleetType(type)),
        changeBoardSize : (size) => dispatch(setupBoardSize(size)),
        changeRandomShips : (isRandom) => dispatch(setupRandomShips(isRandom)),
    }
}
// Single tab for use iside the menu
const  Lobby = (props) => {
  
    return (
        <div className="lobby">
            {/* Enemy Type --------------- */}
            <div className="flex-container">
                <span className="enemy-type bord">
                    <input defaultChecked type={"radio"} name="gameType" onClick={() => { 
                        props.changeEnemyType(server.Params.enemyTpes.AI) }} />
                    AI
                </span> 
                <span className="enemy-type bord">
                    <input type={"radio"} name="gameType" disabled={true}/>
                    Multiplayer
                </span>
                <span className="enemy-type bord">
                    
                </span>
            </div>

            {/* AI Difficulty --------------- */}
            <div className="flex-container">
                <span className="ai-difficulty bord">
                    <input defaultChecked type={"radio"} name="aidifficulty" onClick={() => { 
                        props.changeFleetType(server.Params.fleetType.clasic) }}/>
                    Easy

                    <div >
                    
                        
                    </div>
                </span> 
                <span className="ai-difficulty bord">
                    <input disabled={true}  type={"radio"} name="aidifficulty"  onClick={() => { 
                        props.changeFleetType(server.Params.fleetType.Long) }}/>
                    Medium
                    <div>
                        
                    </div>
                </span>
                <span className="ai-difficulty bord">
                    <input disabled={true} type={"radio"} name="aidifficulty"  onClick={() => { 
                        props.changeFleetType(server.Params.fleetType.Short) }}/>
                    Hard
                    <div>
                        
                    </div>
                </span>
            </div>

            {/* Fleet Type --------------- */}
            <div className="flex-container">
                <span className="fleet-type bord">
                    <input defaultChecked type={"radio"} name="shipsType" onClick={() => { 
                        props.changeFleetType(server.Params.fleetType.clasic) }}/>
                    Clasic
                    <hr></hr>

                    <div >
                        <p>4 Ships, size 2</p>
                        <p>3 Ships, size 3</p>
                        <p>2 Ships, size 4</p>
                        <p>1 Ships, size 5</p>
                        {/* sum of occupied tiles 30 */}
                        
                    </div>
                </span> 
                <span className="fleet-type bord">
                    <input type={"radio"} name="shipsType"  onClick={() => { 
                        props.changeFleetType(server.Params.fleetType.Long) }}/>
                    Long
                    <hr></hr>
                    <div>
                        <p>2 Ships, size 2</p>
                        <p>3 Ships, size 3</p>
                        <p>3 Ships, size 4</p>
                        <p>2 Ships, size 5</p>
                        {/* sum of occupied tiles 35 */}
                    </div>
                </span>
                <span className="fleet-type bord">
                    <input type={"radio"} name="shipsType"  onClick={() => { 
                        props.changeFleetType(server.Params.fleetType.Short) }}/>
                    Short
                    <hr></hr>
                    <div>
                        <p>8 Ships, size 2</p>
                        <p>4 Ships, size 3</p>
                        <p>1 Ships, size 4</p>
                        <p>1 Ships, size 5</p>
                        {/* sum of occupied tiles 37 */}
                    </div>
                </span>
            </div>

            {/* bord Sizes --------------- */}
            <div className="flex-container">
                <span className="board-size bord">
                    <input defaultChecked type={"radio"} name="boardSize" onClick={() => { 
                        props.changeBoardSize(server.Params.fleetType.clasic) }}/>
                    Clasic
                    <hr></hr>

                    <div >
                        <p>10x10</p>
                    </div>
                </span> 
                <span className="board-size bord">
                    <input disabled={false} type={"radio"} name="boardSize"  onClick={() => { 
                        props.changeBoardSize(server.Params.boardSize.small) }}/>
                    Small
                    <hr></hr>
                    <div>
                        <p>5x5</p>
                        
                    </div>
                </span>
                <span className="board-size bord">
                    <input disabled={false} type={"radio"} name="boardSize"  onClick={() => { 
                        props.changeBoardSize(server.Params.boardSize.big,) }}/>
                    Big
                    <hr></hr>
                    <div>
                        <p>15x15</p>
                    </div>
                </span>
            </div>
             {/* Other settings Type --------------- */}
             <div className="flex-container">
                <span className="enemy-type bord">
                    <input type={"checkbox"} name="gameType" onChange={() => { 
                        props.changeRandomShips(!props.gameSetup.randomSetupShips) }} />
                    Random Setup Ships
                </span> 
                <span className="enemy-type bord">
                   
                </span>
                <span className="enemy-type bord">
                    
                </span>
            </div>
            {props.children}
        </div>
    );
  }
export default connect(mapStateToProps, mapDispatchToProps)(Lobby);

//css
import "./MenuTab.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { 
    setupEnemyType,
    setupAiDifficulty,
    setupFleetType,
    setupBoardSize,
    setupRandomShips
} from "../../containers/App/actions"

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
//Single tab for use iside the menu
const  MenuTab = (props) => {
  
    return (
        <div className="menu-tab">

            {props.children}
        </div>
    );
  }
export default connect(mapStateToProps, mapDispatchToProps)(MenuTab);

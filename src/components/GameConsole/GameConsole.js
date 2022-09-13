import React from "react";
import "./GameConsole.css";

import {connect} from "react-redux";

const mapStateToProps = (state)=>{
    return{
        consoleText: state.changeGameConsole.consoleText,
        consoleTime: state.changeGameConsole.consoleTime
    }
}


const GameConsole = (props) =>{
    return(
        <div className="bts-test">
            {`${props.consoleTime} Game Master sad: ${props.consoleText}`}
        </div>
    );
}
export default connect(mapStateToProps)(GameConsole)
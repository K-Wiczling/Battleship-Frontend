import React from "react";
import "./GameConsole.css";

import {connect} from "react-redux";
import ConsoleMessage from "./ConsoleMessage/ConsoleMessage";

const mapStateToProps = (state)=>{
    return{
        log: state.changeGameConsole.log,
    }
}

const GameConsole = (props) =>{
    return(
        <div className="game-console">
            {
                props.log.map((line, i) =>{
                    console.log(line);
                    return(
                        <ConsoleMessage key={i} log={line}/>
                    )

                })
            }
        </div>
    );
}
export default connect(mapStateToProps)(GameConsole)
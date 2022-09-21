//css
import "./GameConsole.css";

//React
import React from "react";

//Redux
import { connect } from "react-redux";
import ConsoleMessage from "./ConsoleMessage/ConsoleMessage";
import MessageSender from "./MessageWriter/MessageSender";

const mapStateToProps = (state) => {
    return { log: state.changeGameConsole.log, }
}

//GameConsole shows all the messages form the playesrs and inside of the game 
const GameConsole = (props) =>{
    return(
        <div className="game-console bg-dark-grade">
            <MessageSender/>
            {
                props.log.map((line, i) =>{
                    return(
                        <ConsoleMessage key={i} log={line}/>
                    )

                })
            }
        </div>
    );
}
export default connect(mapStateToProps)(GameConsole)
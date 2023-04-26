//css
import "./GameConsole.css";

//React
import React from "react";

//Redux
import { connect } from "react-redux";
import ConsoleMessage from "./ConsoleMessage/ConsoleMessage";
import MessageSender from "./MessageWriter/MessageSender";

const mapStateToProps = (state) => {
    return { log: state.currentGameConsole.log, }
}

//GameConsole shows all the messages form the playesrs and inside of the game 
const GameConsole = (props) =>{
    return(
        <div className="game-console">
            <MessageSender/>
            <div className="overflow">
                {
                    props.log.map((line, i) =>{
                        return(
                            <ConsoleMessage key={i} log={line}/>
                            )
                            
                        })
                }
            </div>
        </div>
    );
}
export default connect(mapStateToProps)(GameConsole)
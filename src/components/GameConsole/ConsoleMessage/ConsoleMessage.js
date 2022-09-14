import React from "react";
import server from "../../../classes/server";
import "./ConsoleMessage.css";

const ConsoleMessage = ({log:{consoleText, consoleTime, messageSender, messageType}}) =>{
    const message = `${consoleTime} ${messageSender}: ${consoleText}`;
    let messageColor = "white";
    const msgType = server.Params.gameConsoleMessageTypes;
    switch (messageType) {
        case msgType.info: messageColor = "white"; break;
        case msgType.warning: messageColor = "yellow"; break;
        case msgType.error: messageColor = "red"; break;
        case msgType.enemy: messageColor = "blue"; break;
        case msgType.player: messageColor = "green"; break;
        default: messageColor = "lightblue"; break;
    }
    return(
        <div className="console-message" style={{color: messageColor}}>
            <span className="console-time">{consoleTime} </span>
            <span className="console-sender">{messageSender}: </span>
            <span className="console-text">{consoleText}</span>
        </div>
    );
}
export default ConsoleMessage
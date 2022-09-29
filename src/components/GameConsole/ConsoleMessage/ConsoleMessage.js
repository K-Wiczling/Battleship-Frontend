import React from "react";
import server from "../../../classes/server";
import "./ConsoleMessage.css";

const ConsoleMessage = ({ log: { consoleText, consoleTime, messageSender, messageType } }) => {
    
    //Construct message from any given information
    const message = `${consoleTime} ${messageSender}: ${consoleText}`;
    let messageColor = "white";
    const msgType = server.Params.gameConsoleMessageTypes;

    //Choose color of the message based on the type of the message
    switch (messageType) {
        case msgType.info: messageColor = "var(--darkest-color)"; break;
        case msgType.warning: messageColor = "yellow"; break;
        case msgType.error: messageColor = "red"; break;
        case msgType.enemy: messageColor = "var(--medium-color)"; break;
        case msgType.player: messageColor = "var(--darkest-color)"; break;
        default: messageColor = "lightblue"; break;
    }
    return (
        <div className="console-message" style={{color: messageColor}}>
            <span className="console-time">{consoleTime} </span>
            <span className="console-sender">{messageSender}: </span>
            <span className="console-text">{consoleText}</span>
        </div>
    );
}
export default ConsoleMessage
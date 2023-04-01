//css
import "./Head.css"

//React
import React from 'react';

//Header component
const  Head = ({ text, top }) => {
    if(Number.isInteger(top)) top = 0;
    return (
        <>
            <div className="head" style={{top: `${top}vh`}}>
                <h2>{ text }</h2>
            </div>
            <div className="spacer-top"></div>
        </>
    );
  }
export default Head;

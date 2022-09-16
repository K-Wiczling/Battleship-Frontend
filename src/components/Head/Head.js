//css
import "./Head.css"

//React
import React from 'react';

//Header component
const  Head = ({ text }) => {
  
    return (
        <div className="head">
            <h2>{ text }</h2>
        </div>
    );
  }
export default Head;

//css
import "./Head.css"

//React
import React from 'react';

//Header component
const  Head = ({ text }) => {
  
    return (
        <div className="head">
            <h2><a href="index.html">{ text }</a></h2>
        </div>
    );
  }
export default Head;

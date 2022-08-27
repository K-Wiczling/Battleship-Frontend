import React from 'react';
import "./css/Head.css"

const  Head = ({text}) => {
  
    return (
        <div className="head">
            <h2>{text}</h2>
        </div>
    );
  }


export default Head;

//css
import "./Button.css"

//React
import React from 'react';

//Simple Button Component
const  Button = ({text, onclick}) => {
    return (
        <>
            <button className='button' onClick={ onclick }>{ text }</button>
        </>
    );
  }


export default Button;

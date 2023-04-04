//css
import "./Button.css"

//React
import React from 'react';

//Simple Button Component
const Button = ({ 
    text='Default Click?', 
    onclick, 
    width = 150, 
    height = 30, 
    fontSize = 1 
}) => {

    // Dynamic styles
    const style = {
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${fontSize}rem`
    }

    return (
        <button
            className='button-component'
            onClick={onclick}
            style={style}>
            {text}
        </button>
    );
}
export default Button;

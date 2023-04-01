//css
import "./Button.css"

//React
import React from 'react';

//Simple Button Component
const Button = ({ text, onclick, width, height }) => {
    const style = {
        width: `${width}px`,
        height: `${height}px`,
        fontSize: `${height / 2.5}px`

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

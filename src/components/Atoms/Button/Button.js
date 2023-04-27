// Css
import "./Button.css"

// React
import React from 'react';

// Simple Button Component
const Button = ({ 
    text='Default Click?', 
    onclick,
    classes = 'btn-medium'
}) => {
    return (
        <button
            className={'button-component ' + classes}
            onClick={onclick}>
            {text}
        </button>
    );
}
export default Button;

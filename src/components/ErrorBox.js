import React from 'react';
import "./css/Button.css"

const  ErrorBox = ({errorText}) => {
  
    return (
        <div className='error-box'>
            <h2>{errorText}</h2>
        </div>
    );
  }


export default ErrorBox;

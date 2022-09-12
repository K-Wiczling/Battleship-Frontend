import React from 'react';
import "./ErrorBox.css"

const  ErrorBox = ({errorTitle, errorContent }) => {
  
    return (
        <div className='error-box'>
            <h3>{errorTitle}</h3>
            <p>{errorContent}</p>
        </div>
    );
  }


export default ErrorBox;

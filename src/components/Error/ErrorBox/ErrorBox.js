//css
import "./ErrorBox.css"
//React
import React from 'react';

//Message shown when componet did not mount corectly
const  ErrorBox = ({ errorTitle, errorContent }) => {
  
    return (
        <div className='error-box'>
            <h3>{ errorTitle }</h3>
            <p>{ errorContent }</p>
        </div>
    );
  }


export default ErrorBox;

import React from "react";
import "./css/btsTest.css"

const BtsTest = (props) =>{
    return(
        <div className="bts-test">
            {props.test}
        </div>
    );
}
export default BtsTest
import React from "react";
import "./btsTest.css";

const funky = async function() {
    
}

const BtsTest = (props) =>{
    return(
        <div className="bts-test">
            {props.test}
        </div>
    );
}
export default BtsTest
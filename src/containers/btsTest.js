import React, {Component} from "react";
import "./css/btsTest.css"

class BtsTest extends Component{
    render(){
        return(
            <div className="bts-test">
                {this.props.test}
            </div>
        );
    }
}
export default BtsTest
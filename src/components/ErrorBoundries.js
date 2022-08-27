import React, {Component} from "react";
import ErrorBox from "./ErrorBox";

class ErrorBoundries extends Component {
    constructor(props){
        super(props)
        this.state= {
            error: false
        }
    }
    componentDidCatch(){
        this.setState({error: true});
    }
    render(){
        if(this.state.error){
            return(
                <ErrorBox errorText={"error hapend"} />
            );
        }else{
            return this.props.children;
        }
    }
}
export default ErrorBoundries;
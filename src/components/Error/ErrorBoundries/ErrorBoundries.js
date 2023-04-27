//React
import React, { Component } from "react";

//Components
import ErrorBox from "../ErrorBox/ErrorBox";

class ErrorBoundries extends Component {
    constructor (props) {
        super(props);
        this.state= {
            error: false,
        };
    }
    componentDidCatch(e){
        this.setState({errorContent: e});
        this.setState({error: true});

    }
    render () {
        if (this.state.error) {
            return(
                <ErrorBox errorTitle={this.props.child} errorContent={this.props.errorContent}/>
            );
        } else {
            return this.props.children;
        }
    }
}
export default ErrorBoundries;
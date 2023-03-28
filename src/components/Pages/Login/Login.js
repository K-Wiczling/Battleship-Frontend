//css
import "./Login.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
//Components

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
//Pop up menu to display in the game
const Login = (props) => {

    return (
        <div className="login">
            <p>Login</p>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

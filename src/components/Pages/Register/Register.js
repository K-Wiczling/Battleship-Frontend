//css
import "./Register.css"

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
const Register = (props) => {

    return (
        <div className="register">
            <p>Register</p>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);

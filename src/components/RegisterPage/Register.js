//css
import "./Register.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { MODE_SPLASH_SCREEN } from "../../../containers/App/constants";
import {
    changeModes
} from "../../../containers/App/actions"

//Components

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // leaveTheGame: () => dispatch(changeModes(MODE_SPLASH_SCREEN))
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

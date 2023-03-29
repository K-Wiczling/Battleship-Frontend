//css
import "./Login.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import Button from "../../Button/Button";
import { setPage } from "../../../containers/Website/actions";
import { REGISTER_PAGE } from "../../../containers/Website/constants";

//Components

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToRegister: () => dispatch(setPage(REGISTER_PAGE))
    }
}
//Pop up menu to display in the game
const Login = (props) => {

    return (
        <div className="login">
            <div className="center former" action="none">
                <p>Sign in</p>

                <label ><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />

                <label  ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="pass" id="pass" required />

                <Button text={'Login'} width={200} height={40} />

                <p>Don't have an account? </p>
                <Button onClick={props.goToRegister} text={'Register'} width={200} height={30} />

            </div>
        </div>
        
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

//css
import "./Register.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { setPage } from "../../../containers/Website/actions";
import { LOGIN_PAGE } from "../../../containers/Website/constants";

//Components
import Button from "../../Button/Button";

//Components

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToLogin: () => dispatch(setPage(LOGIN_PAGE))
    }
}
//Pop up menu to display in the game
const Register = (props) => {

    return (
        <div className="register">
            <div className="center former">
                <p>Create new account</p>

                <label ><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={(e) => {
                    console.log(e.target.value);
                }}  />

                <label ><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" id="name" required />

                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="pass" id="pass" required />

                <label ><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="pass-repeat" id="pass-repeat" required />

                <Button text={'Register'} width={200} height={40} />

                <p>Already have an account? </p>
                <Button onclick={props.goToLogin} text={'Sign in'} width={200} height={30} />

            </div>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);

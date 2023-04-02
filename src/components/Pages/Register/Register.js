//css
import "./Register.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { setPage } from "../../../containers/Website/actions";
import { LOGIN_PAGE } from "../../../containers/Website/constants";

//Components
import Button from "../../Atoms/Button/Button";

// Classes
import server from "../../../classes/server";

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToLogin: () => dispatch(setPage(LOGIN_PAGE)),
    }
}

// Register page 
const Register = (props) => {
    // Holds data for login before it will be updated in state
    const registerData = {
        email: '',
        name: '',
        password: '',
        passRepeat: '',
    };

    return (
        <div className="register">
            <div className="center former">
                <p>Create new account</p>

                <label ><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={(e) => {
                    registerData.email = e.target.value;
                }} />

                <label ><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" id="name" required onChange={(e) => {
                    registerData.name = e.target.value;
                }} />

                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="pass" id="pass" required onChange={(e) => {
                    registerData.password = e.target.value;
                }} />

                <label ><b>Repeat Password</b></label>
                <input type="password" minlength="10" placeholder="Repeat Password" name="pass-repeat" id="pass-repeat" required onChange={(e) => {
                    registerData.passRepeat = e.target.value;
                }} />

                {/* connect to server */}
                <Button text={'Register'} width={200} height={40}
                    onclick={async function () {
                        try {
                            const result = await server.send(registerData, 'register');
                            console.log(result);
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }} />

                <p>Already have an account? </p>
                <Button onclick={props.goToLogin} text={'Sign in'} width={200} height={30} />

            </div>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
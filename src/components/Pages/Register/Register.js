//CSS
import "./Register.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { setPage, updatRequirementsList } from "../../../containers/Website/redux/actions";
import { setLoggedUserData } from "../../../containers/App/redux/actions";
import { LOGIN_PAGE, USER_ACCOUNT_PAGE } from "../../../containers/Website/redux/constants";

//Components
import Button from "../../Atoms/Button/Button";
import InputReq from "../../Atoms/InputReq/InputReq";

// Classes
import server from "../../../classes/server";
import Validate from "../../../classes/validate";

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToLogin: () => dispatch(setPage(LOGIN_PAGE)),
        goToUserAccount: () => dispatch(setPage(USER_ACCOUNT_PAGE)),
        setUserData: (userData) => dispatch(setLoggedUserData(userData)),
        updateInputReqs: (validationList) => dispatch(updatRequirementsList(validationList))
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
    let validationList = [];

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
                <input type="password" placeholder="Repeat Password" name="pass-repeat" id="pass-repeat" required onChange={(e) => {
                    registerData.passRepeat = e.target.value;
                }}/>

                {/* Show list of the requirements to register account */}
                <InputReq/>

                {/* connect to server */}
                <Button text={'Register'} classes={'btn-medium'}
                    onclick={async function () {
                        let valid = true;
                        // Check Email
                        if (!Validate.validateEmail(registerData.email)) {
                            validationList.push({id:0 ,msg:'Email: valid email ex. name@mail.com'});
                            valid = false;
                        }

                        // Check Name
                        const nameValidation = Validate.validateName(registerData.name)
                        if (nameValidation.result === false) {
                            validationList = validationList.concat(nameValidation.rest);
                            valid = false;
                        }

                        // Chack password
                        const passValidation = Validate.validatePassword(registerData.password)
                        if (passValidation.result === false) {
                            validationList = validationList.concat(passValidation.rest);
                            valid = false;
                        }

                        // Check if both passwords are the same
                        if (!(registerData.password === registerData.passRepeat)) {
                            validationList.push({id:7 ,msg:'Passwords not matching, both passwords has to be the same'});
                            valid = false;
                        }

                        // Upadate state with list of not fullfilled requirements
                        props.updateInputReqs(validationList);
                        validationList = [];
                        
                        // Make api request if validation is succesfull
                        if(valid){
                            // Sanitize input
                            registerData.email = Validate.sanitizeEmail(registerData.email);
                            registerData.password = Validate.sanitizePassword(registerData.password);

                            // Api call
                            try {
                                const result = await server.send(registerData, 'register');
                                props.setUserData(result);
                                props.goToUserAccount();
                            }
                            catch (error) {
                                console.log(error);
                            }
                        }
                    }} />

                <p>Already have an account? </p>
                <Button onclick={props.goToLogin} text={'Sign in'} classes={'btn-small'} />

            </div>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);
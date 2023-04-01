//css
import "./Register.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { setPage, updateRegister } from "../../../containers/Website/actions";
import { LOGIN_PAGE } from "../../../containers/Website/constants";

//Components
import Button from "../../Button/Button";

// Holds data for login before it will be updated in state
const registerData = {
    email: '',
    name: '',
    password: '',
    passRepeat: '',
};

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToLogin: () => dispatch(setPage(LOGIN_PAGE)),
        updateRegiser: () => {
            dispatch(updateRegister(registerData))
        }
    }
}

// Register page 
const Register = (props) => {

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
                }} />

                {/* Update state and connect to server */}
                <Button onclick={() => {
                    props.updateRegiser()
                    registerNewUser(props.registerPage);
                }
                } text={'Register'} width={200} height={40} />

                <p>Already have an account? </p>
                <Button onclick={props.goToLogin} text={'Sign in'} width={200} height={30} />

            </div>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);

// Fetch data to/from server
const registerNewUser = () => {
    fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // do something with the response data
        })
        .catch(error => console.error(error));
}
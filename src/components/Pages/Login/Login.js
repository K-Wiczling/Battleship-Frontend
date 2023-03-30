//css
import "./Login.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import Button from "../../Button/Button";
import { setPage, updateLogin } from "../../../containers/Website/actions";
import { REGISTER_PAGE } from "../../../containers/Website/constants";

//Components

const loginData = {
    email: '',
    password: ''
};

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToRegister: () => dispatch(setPage(REGISTER_PAGE)),
        updateLogin: () => {
            dispatch(updateLogin(loginData))
        }
    }
}
//Pop up menu to display in the game
const Login = (props) => {

    return (
        <div className="login">
            <div className="center former" action="none">
                <p>Sign in</p>

                <label ><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={(e) => {
                    loginData.email = e.target.value;
                }} />

                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="pass" id="pass" required onChange={(e) => {
                    loginData.password = e.target.value;
                }} />

                <Button onclick={ () =>{
                    props.updateLogin()
                    loginTo(props.registerPage);
                }} text={'Login'} width={200} height={40} />

                <p>Don't have an account? </p>
                <Button onclick={props.goToRegister} text={'Register'} width={200} height={30} />

            </div>
        </div>

    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const loginTo = () => {
    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // do something with the response data
        })
        .catch(error => console.error(error));
}
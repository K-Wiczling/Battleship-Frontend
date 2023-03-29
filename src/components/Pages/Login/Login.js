//css
import "./Login.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import Button from "../../Button/Button";
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
const Login = ({ getToRegister }) => {

    return (
        <div className="login">
            <form className="center">
                <p>Create new account</p>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required />

                <label for="email"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" id="name" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="pass" id="pass" required />

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="pass-repeat" id="pass-repeat" required />

                <Button text={'Register'} width={200} height={40} />


                <p>Already have an account? </p>
                <Button onClick={getToRegister} text={'Sign in'} width={200} height={30} />

            </form>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

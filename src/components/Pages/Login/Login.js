//css
import "./Login.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { setPage } from "../../../containers/Website/actions";
import { REGISTER_PAGE } from "../../../containers/Website/constants";

// Components
import Button from "../../Atoms/Button/Button";

// Classes
import server from "../../../classes/server";

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToRegister: () => dispatch(setPage(REGISTER_PAGE)),
       
    }
}

// Login page 
const Login = (props) => {
    const loginData = {
        email: 'test@mail.com',
        password: 'test123456789'
    };
    return (
        <div className="login">
            <div className="center former" action="none">
                <p>Sign in</p>

                <label ><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" value={loginData.email} required onChange={(e) => {
                    loginData.email = e.target.value;
                }} />

                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="pass" value={loginData.password} id="pass" required onChange={(e) => {
                    loginData.password = e.target.value;
                }} />

                <Button text={'Login'} width={200} height={40} 
                onclick={ async function(){
                    try {
                        const result = await server.send(loginData, 'login');
                        console.log(result);
                    }
                    catch(error){
                        console.log(error);
                    }
                }}/>

                <p>Don't have an account? </p>
                <Button onclick={props.goToRegister} text={'Register'} width={200} height={30} />

            </div>
        </div>

    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);

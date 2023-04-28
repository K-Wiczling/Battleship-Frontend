//CSS
import "./UserAccount.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { changeAppMode } from '../../../containers/App/redux/actions';
import { MODE_MAIN_MENU } from '../../../containers/App/redux/constants';

//Components
import Button from "../../Atoms/Button/Button";

const mapStateToProps = (state) => {
    return {
        user: state.userData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToGame: () => dispatch(changeAppMode(MODE_MAIN_MENU)),
    }
}

// User account page 
const UserAccount = (props) => {
    console.log(props.user);
    return (
            <div className="user_account center">
                <div className="user-info">
                    <p>Hello: <b>{ props.user.name}</b>, nice to see you again!! </p>

                </div>
                <div className="tabs">
                    <Button onclick={() => {}} text={"Settigns"} classes={'btn-small btn-holllow'}/>
                    <Button onclick={() => {}} text={"Gamse history"} classes={'btn-small btn-holllow'}/>

                </div>
                <Button onclick={props.goToGame} text={"Start Game"} classes={'btn-huge'}/>
                
            </div>
        )
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);
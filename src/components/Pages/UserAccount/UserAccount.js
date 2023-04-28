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
                <p>Hello: <b>{ props.user.name}</b>, nice to see you again!! </p>
                <p>Your score is: {props.user.score_to_rank}</p>

                <Button onclick={props.goToGame} text={"Start Game"} classes={'btn-huge'}/>

            </div>
        )
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);
//CSS
import "./UserAccount.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { setPage, updatRequirementsList } from "../../../containers/Website/redux/actions";
import { LOGIN_PAGE } from "../../../containers/Website/redux/constants";
import { userData } from "../../../containers/App/redux/reducer";

//Components

const mapStateToProps = (state) => {
    return {
        user: state.userData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToLogin: () => dispatch(setPage(LOGIN_PAGE)),
        updateInputReqs: (validationList) => dispatch(updatRequirementsList(validationList))
    }
}

// User account page 
const UserAccount = (props) => {
    console.log(props.user);
    return (
            <div className="user_account center">
                <p>Hello: <b>{ props.user.name}</b>, nice to see you again!! </p>
                <p>Your score is: {props.user.score_to_rank}</p>
            </div>
        )
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);
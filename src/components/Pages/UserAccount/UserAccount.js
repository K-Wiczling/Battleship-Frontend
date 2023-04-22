//CSS
import "./UserAccount.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { setPage, updatRequirementsList } from "../../../containers/Website/actions";
import { LOGIN_PAGE } from "../../../containers/Website/constants";

//Components

const mapStateToProps = (state) => {
    return {
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
            <div>
                User account
            </div>
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);
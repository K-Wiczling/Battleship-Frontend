//css
import "./Navbar.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from '../../../containers/Website/constants';
import { setPage } from '../../../containers/Website/actions';

//Components
import Button from "../../Button/Button";

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showLoginPage: () => dispatch(setPage(LOGIN_PAGE)),
    showRegisterPage: () => dispatch(setPage(REGISTER_PAGE)),
    }
}
//Pop up menu to display in the game
const Navbar = (props) => {

    return (
        <div className="navbar">
            <div className='fl-center'>
                    <Button text={"Register"} onclick={props.showRegisterPage} width={100} height={40} />
                    <Button text={"Login"} onclick={props.showLoginPage} width={100} height={40} />
                </div>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

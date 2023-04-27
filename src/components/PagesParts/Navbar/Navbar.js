//css
import "./Navbar.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from '../../../containers/Website/redux/constants';
import { setPage } from '../../../containers/Website/redux/actions';

//Components
import Button from "../../Atoms/Button/Button";

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showLoginPage: () => dispatch(setPage(LOGIN_PAGE)),
        showRegisterPage: () => dispatch(setPage(REGISTER_PAGE)),
        showHomePage: () => dispatch(setPage(HOME_PAGE)),
    }
}
//Pop up menu to display in the game
const Navbar = (props) => {

    return (
        <div className="navbar">
            <div className='fl-center'>
                <Button text={"Home"} onclick={props.showHomePage} classes={'btn-medium'} />
                <Button text={"Register"} onclick={props.showRegisterPage} classes={'btn-medium'} />
                <Button text={"Login"} onclick={props.showLoginPage} classes={'btn-medium'} />
            </div>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

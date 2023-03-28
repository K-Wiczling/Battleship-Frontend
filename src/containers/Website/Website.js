//css
import './Website.css';

//React stuff
import React, { Component } from 'react';

//Components
import Register from '../../components/Pages/Register/Register';
import Login from '../../components/Pages/Login/Login';
import Home from '../../components/Pages/Home/Home';

//Containers

//Redux
import { connect } from 'react-redux';
// import { changeModes } from '../App/actions';
// import { MODE_SPLASH_SCREEN } from '../App/constants';

import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from './constants';
import { setPage } from './actions';

const mapStateToProps = (state) => {
  return {
    showSplash: state.showSplash,
    page: state.websitePage.page
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    showLoginPage: () => dispatch(setPage(LOGIN_PAGE)),
    showRegisterPage: () => dispatch(setPage(REGISTER_PAGE)),
    showHomePage: () => dispatch(setPage(HOME_PAGE))
  }
}
//Website part of the app 
class Website extends Component {
  render() {
    switch (this.props.page) {
      case HOME_PAGE:
        return (
          <Home></Home>
        )
      case REGISTER_PAGE:
        return (
          <Register/>
        )
      case LOGIN_PAGE:
        return (
          <Login/>
        )

      default:
        break;
    }


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Website);

// CSS
import './PageContainer.css';

// React
import React, { Component } from 'react';

// Redux
import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE, USER_ACCOUNT_PAGE } from '../../../containers/Website/redux/constants';
import { connect } from 'react-redux';

// Components
import Register from '../../Pages/Register/Register';
import Login from '../../Pages/Login/Login';
import Home from '../../Pages/Home/Home';
import UserAccount from '../../Pages/UserAccount/UserAccount';

const mapStateToProps = (state) => {
  return {
    page: state.currentWebsitePage.page
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

// Containt website conentnt, wrapper for pages,
// that show page based on the state of the app
class PageContainer extends Component {
  render() {
    switch (this.props.page) {
      case HOME_PAGE:
        return (
          <Home/>
        )
      case REGISTER_PAGE:
        return (
          <Register />
        )
      
      case LOGIN_PAGE:
        return (
          <Login />
        )

      case USER_ACCOUNT_PAGE:
        return (
          <UserAccount />
        )

      default:
        break;
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);

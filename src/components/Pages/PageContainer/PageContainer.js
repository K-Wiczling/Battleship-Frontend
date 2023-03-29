//css
import './PageContainer.css';

//React stuff
import React, { Component } from 'react';

//Components
import Register from '../Register/Register';
import Login from '../Login/Login';
import Home from '../Home/Home';

//Redux
import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from '../../../containers/Website/constants';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    page: state.websitePage.page
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
//Containt website conentnt
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

      default:
        break;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageContainer);

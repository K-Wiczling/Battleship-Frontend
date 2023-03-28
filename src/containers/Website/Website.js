//css
import './Website.css';

//React stuff
import React, { Component } from 'react';

//Components
import Head from '../../components/Head/Head';
import Button from '../../components/Button/Button';
import Register from '../../components/Register/Register';
import Login from '../../components/Login/Login';

//Containers

//Redux
import { connect } from 'react-redux';
import { changeModes } from '../App/actions';
import { MODE_SPLASH_SCREEN } from '../App/constants';

import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from './constants';

const mapStateToProps = (state) => {
  return {
    showSplash: state.showSplash,
    page: state.websitePage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    goToGame: () => dispatch(changeModes(MODE_SPLASH_SCREEN)),
  }
}
//Main entrance to the app 
class Website extends Component {
  render() {
    switch (this.props.page) {
      case HOME_PAGE:
        return (
          <div className="website">
            <div className="center">

              <Head text={"Battleship"} top="20" />
              <div className='fl-center'>
                <Button text={"Register"} width={100} height={40} />
                <Button text={"Login"} width={100} height={40} />
              </div>
              <Button onclick={this.props.goToGame} text={"Start"} width={450} height={110} />
              <p>Welcome to Battleship website</p>
            </div>
          </div>
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

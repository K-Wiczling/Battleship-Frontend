//css
import "./Home.css"

//React
import React from 'react';

//Components
import Head from '../../Head/Head';
import Button from '../../Button/Button';

//Redux
import { connect } from 'react-redux';
import { changeModes } from '../../../containers/App/actions';
import { MODE_SPLASH_SCREEN } from '../../../containers/App/constants';

import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from '../../../containers/Website/constants';
import { setPage } from '../../../containers/Website/actions';

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    goToGame: () => dispatch(changeModes(MODE_SPLASH_SCREEN)),
    showLoginPage: () => dispatch(setPage(LOGIN_PAGE)),
    showRegisterPage: () => dispatch(setPage(REGISTER_PAGE)),
  }
}
//Pop up menu to display in the game
const Home = (props) => {
    return (
        <div className="home">
            <div className="center">
                <div className='fl-center'>
                    <Button text={"Register"} onclick={props.showRegisterPage} width={100} height={40} />
                    <Button text={"Login"} onclick={props.showLoginPage} width={100} height={40} />
                </div>
                <Button onclick={props.goToGame} text={"Start"} width={450} height={110} />
                <p>Welcome to Battleship website</p>
            </div>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

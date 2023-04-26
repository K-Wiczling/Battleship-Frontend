//css
import "./Home.css"

//React
import React from 'react';

//Redux
import { connect } from 'react-redux';
import { changeAppMode } from '../../../containers/App/redux/actions';
import { MODE_MAIN_MENU } from '../../../containers/App/redux/constants';

//Components
import Button from '../../Atoms/Button/Button';


const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    goToGame: () => dispatch(changeAppMode(MODE_MAIN_MENU)),
  }
}


//Home page in the websites
const Home = (props) => {
    return (
        <div className="home">
            <div className="center">
                
                <Button onclick={props.goToGame} text={"Start"} width={450} height={110} />
                <p>Welcome to Battleship website</p>
            </div>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

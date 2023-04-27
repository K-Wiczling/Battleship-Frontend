//css
import "./Home.css"

//React
import React from 'react';

//Redux
import { connect } from 'react-redux';

//Components
import Button from '../../Atoms/Button/Button';


const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}


//Home page in the websites
const Home = (props) => {
    return (
        <div className="home">
            <div className="center">
                
                <p>Welcome to Battleship website</p>
            </div>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

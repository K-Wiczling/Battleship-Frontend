//css
import './Website.css';

//React stuff
import React, { Component } from 'react';

//Components
import Head from '../../components/Head/Head';
import PageContainer from '../../components/Pages/PageContainer/PageContainer';

//Containers

//Redux
import { connect } from 'react-redux';
// import { changeModes } from '../App/actions';
// import { MODE_SPLASH_SCREEN } from '../App/constants';

import { setPage } from './actions';

const mapStateToProps = (state) => {
  return {
    showSplash: state.showSplash,
    page: state.websitePage.page
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
//Website part of the app 
class Website extends Component {
  render() {
    return (
      <>
        <Head text={'Battleship'}/>
        <PageContainer />
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Website);

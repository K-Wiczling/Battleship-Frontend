//css
import './Website.css';

//React stuff
import React, { Component } from 'react';

//Components
import Navbar from '../../components/Pages/Navbar/Navbar'
import Head from '../../components/Head/Head';
import PageContainer from '../../components/Pages/PageContainer/PageContainer';

//Containers

//Redux
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    showSplash: state.showSplash,
    page: state.websitePage.page,
    reg: state.registerPage
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
        <Navbar />
        <Head text={'Battleship'} />

        <PageContainer />
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Website);

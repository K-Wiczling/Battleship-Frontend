// CSS
import './Website.css';

// React stuff
import React, { Component } from 'react';

// Components
import Head from '../../components/Atoms/Head/Head';
import Navbar from '../../components/PagesParts/Navbar/Navbar'
import PageContainer from '../../components/PagesParts/PageContainer/PageContainer';

// Redux
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    showSplash: state.showSplash,
    page: state.currentWebsitePage.page,
    reg: state.registerPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

// Website part of the app 
class Website extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Head/>

        <PageContainer />
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Website);

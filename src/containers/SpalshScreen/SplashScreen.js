// Css
import "./SplashScreen.css"

// React
import React from 'react';

// Redux
import { connect } from "react-redux";
import { changeModes } from "../App/actions";
import { MODE_MAIN_MENU, MODE_WEBSITE } from "../App/constants";

// Components
import Head from '../../components/Atoms/Head/Head';
import Button from '../../components/Atoms/Button/Button';

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToMenu: () => dispatch(changeModes(MODE_MAIN_MENU)),
        goToWebsite: () => dispatch(changeModes(MODE_WEBSITE))
    }
}
// Splash screen component, shown before main menu starts
// Default screen to show if somthing go wrong
const SplashScreen = (props) => {
    return (
        <div className="splash-screen">
            <div className="center">
                <Head text={"Battleship"} top="20" />
                <Button onclick={props.goToMenu} text={"Start"} width={450} height={110} />
                <div className="fixed-foot foot">
                    <Button onclick={props.goToWebsite} text={"Exit"} width={300} height={60} />
                </div>
            </div>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);


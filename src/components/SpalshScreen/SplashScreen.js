//css
import "./SplashScreen.css"

//React
import React from 'react';

//Components
import Head from '../Head/Head';
import Button from '../Button/Button';

//Splash screen component, shown before main menu starts
//Default screen to show if somthing go wrong
const  SplashScreen = ({ onclick }) => {
    return (
        <div className="splash-screen">
            <Head text={ "Battleship" }/>
            <Button onclick={ onclick } text={ "Start" }/>
        </div>
    );
  }


export default SplashScreen;

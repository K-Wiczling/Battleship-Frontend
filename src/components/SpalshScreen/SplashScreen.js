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
            <div className="center">
                <Head text={ "Battleship" } top="20"/>
                <Button onclick={ onclick } text={ "Start" } width={450} height={110}/>
                <div className="fixed-foot foot">
                    <Button onclick={ onclick } text={ "Exit" } width={300} height={60}/>
                </div>
            </div>
        </div>
    );
  }
export default SplashScreen;

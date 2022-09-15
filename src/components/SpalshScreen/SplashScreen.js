import React from 'react';
import Head from '../Head/Head';
import "./SplashScreen.css"
import Button from '../Button/Button';

const  SplashScreen = ({ onclick }) => {
    return (
        <div className="splash-screen">
            <Head text={ "Battleship" }/>
            <Button onclick={ onclick } text={ "Start" }/>
        </div>
    );
  }


export default SplashScreen;

import React from 'react';
import Head from './Head';
import "./css/SplashScreen.css"
import Button from './Button';

const  SplashScreen = ({onclick}) => {
    return (
        <div className="splash-screen">

            <Head text={"Battleship"}/>
            <Button onclick={onclick} text={"Start"}/>
        </div>
    );
  }


export default SplashScreen;

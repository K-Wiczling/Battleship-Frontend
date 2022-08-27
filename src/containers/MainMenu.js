import React, { Component } from 'react';
import Button from '../components/Button';
import Head from '../components/Head';
import "./css/MainMenu.css"

class  MainMenu extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render(){      

        return (
            <div className="main-menu">
               <Head text="Battleship"/>
               <h3>Main menu</h3>
               <Button text="Play" onclick={this.props.onclick}/>
            </div>
    );
  }
}

export default MainMenu;

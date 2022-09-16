//css
import "./MainMenu.css";

//React
import React, { Component } from 'react';

//Components
import Button from '../../components/Button/Button';
import Head from '../../components/Head/Head';

//Display main menu and take care of the whole logic in here
class  MainMenu extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render () {      
        return (
            <div className="main-menu">
               <Head text="Battleship"/>
               <h3>Main menu</h3>
               <Button text="Play" onclick={ this.props.onclick }/>
            </div>
    );
  }
}
export default MainMenu;

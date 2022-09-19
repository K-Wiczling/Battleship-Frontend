//css
import "./MenuTab.css"

//React
import React from 'react';

//Single tab for use iside the menu
const  MenuTab = (props) => {
  
    return (
        <div className="menu-tab">
            {props.children}
        </div>
    );
  }
export default MenuTab;

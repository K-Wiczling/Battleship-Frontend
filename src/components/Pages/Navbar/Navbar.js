//css
import "./Navbar.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
//Components

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
//Pop up menu to display in the game
const Navbar = (props) => {

    return (
        <div className="navbar">
            <p>Navbar</p>
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

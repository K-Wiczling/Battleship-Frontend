//css
import "./Modal.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";
import { MODE_SPLASH_SCREEN } from "../../containers/App/constants";
import {
    changeModes
} from "../../containers/App/actions"

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
//Modal component
const Modal = (props) => {
    return (
        <div className="modal" >
            {props.children}
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);


// Css
import "./Modal.css"

// React
import React from 'react';

// Redux
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

// Modal component
const Modal = (props) => {
    return (
        <div className="modal" >
            {props.children}
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);


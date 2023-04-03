//css
import "./InputReq.css"

//React
import React from 'react';

//Redux
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        requirements: state.registerPage.reqs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

//Modal component
const InputReq = ({requirements}) => {

    return (
        <div className="input-req">
            <ul>{requirements.map(singleReq => <li key={singleReq.id}> {singleReq.msg} </li>)}</ul>
        </div>

    );
}
export default connect(mapStateToProps, mapDispatchToProps)(InputReq);


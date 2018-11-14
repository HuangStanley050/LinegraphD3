import React from "react";
import { connect } from 'react-redux';
import { selection } from "../store/actions/buttonPress";



const Activities = (props) => {

    const activeButton = "active";

    const buttonHandler = (e) => {
        //console.log(e.target.dataset.activity);
        props.selectActivity(e.target.dataset.activity);
    };

    return (
        <div className="col s12 l5">
            <button onClick={buttonHandler} id="cycling" className={props.active==='cycling'?activeButton:null} data-activity="cycling">Cycling</button>
            <button onClick={buttonHandler} id="running" className={props.active==='running'?activeButton:null} data-activity="running">Running</button>
            <button onClick={buttonHandler} id="swimming" className={props.active==='swimming'?activeButton:null} data-activity="swimming">Swimming</button>
            <button onClick={buttonHandler} id="walking" className={props.active==='walking'?activeButton:null} data-activity="walking">Walking</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        selectActivity: (activity) => dispatch(selection(activity))
    };
};

const mapStateToProps = state => {
    return {
        active: state.selection.currentSelection
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activities);

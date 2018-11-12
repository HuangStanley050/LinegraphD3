import React from "react";
import { connect } from "react-redux";

const Form = (props) => {
    return (
        <div className="row">
            <form className="col m6 push-m3">
                <p className="flow-text grey-text center">How much <span>{props.active}</span> have you done today?</p>
                <input type="text" className="white-text" id="cycling" placeholder='Distance in kilometers' />
                <p className="center error red-text text-lighten-1">error</p>
            </form>
            </div>
    );
};

const mapStateToProps = state => {
    return {
        active: state.selection.currentSelection
    }
};

export default connect(mapStateToProps)(Form);

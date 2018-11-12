import React, { Component } from "react";
import { connect } from "react-redux";
import { distance } from "../store/actions/distance";

class Form extends Component {

    state = {
        distance: null
    }

    distanceHandler = (e) => {

        this.setState({ distance: parseInt(e.target.value) });
    }

    submitHandler = (e) => {
        e.preventDefault();
        //console.log(this.state.disance);
        this.props.distanceInput(this.state.distance);
    }

    render() {
        return (
            <div className="row">
            <form onSubmit={this.submitHandler} className="col m6 push-m3">
                <p className="flow-text grey-text center">How much <span>{this.props.active}</span> have you done today?</p>
                <input onChange={this.distanceHandler} type="text" value={this.state.distanceHandler} className="white-text" id={this.props.active} placeholder='Distance in kilometers' />
                <p className="center error red-text text-lighten-1">error</p>
            </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        active: state.selection.currentSelection
    };
};

const mapDispatchToProps = dispatch => {
    return {
        distanceInput: (d) => dispatch(distance(d))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

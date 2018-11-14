import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import drawGraph from "../helper/drawGraph";
//import * as d3 from 'd3';



class Chart extends Component {

    componentDidMount() {
        //console.log(this.props.data);
        //this.drawGraph();
        drawGraph(this.myREF, this.props.data, this.props.currentActivity);
    }
    componentDidUpdate() {
        //console.log(this.myREF);
        drawGraph(this.myREF, this.props.data, this.props.currentActivity);
    }

    /*drawGraph = () => {
        const margin = {
            top: 40,
            right: 20,
            bottom: 50,
            left: 100
        };
        const graphWidth = 560 - margin.left - margin.right;
        const graphHeight = 400 - margin.top - margin.bottom;

        let svg = d3.select(this.myREF)
            .attr('width', graphWidth + margin.left + margin.right)
            .attr('height', graphHeight + margin.top + margin.bottom)


        //console.log(svg);
    }*/
    render() {
        return (
            <div className="col s12 l6 push-l1">
                <div className="canvas">
                    <svg ref={el=>this.myREF=el}>
                     <g id="graph">
                     <g id="xAxis">
                     </g>
                     <g id="yAxis">
                     </g>
                     </g>
                    </svg>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    //console.log(state.firestore);
    return {
        data: state.firestore.ordered.activities,
        currentActivity: state.selection.currentSelection
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default compose(firestoreConnect([{ collection: "activities" }]), connect(mapStateToProps, mapDispatchToProps))(Chart);

import React from "react";

const Activities = () => {
    return (
        <div className="col s12 l5">
            <button className="active" data-activity="cycling">Cycling</button>
            <button data-activity="running">Running</button>
            <button data-activity="swimming">Swimming</button>
            <button data-activity="walking">Walking</button>
            </div>
    )
};

export default Activities;

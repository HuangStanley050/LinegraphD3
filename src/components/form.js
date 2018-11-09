import React from "react";

const Form = () => {
    return (
        <div className="row">
            <form className="col m6 push-m3">
                <p className="flow-text grey-text center">How much <span>cycling</span> have you done today?</p>
                <input type="text" className="white-text" id="cycling" placeholder='Distance in kilometers' />
                <p className="center error red-text text-lighten-1">error</p>
            </form>
            </div>
    );
};

export default Form;

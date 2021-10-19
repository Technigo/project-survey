import React from "react";

const Intro = ({ onStepChange }) => {

    return (
        <div>
            <h1>Christmas Survey!</h1>
            <p>Please spread some of that Christmas spirit by filling out this survey. Thank you!</p>
            <button onClick={onStepChange}>Start</button>
        </div>
    );
};

export default Intro;
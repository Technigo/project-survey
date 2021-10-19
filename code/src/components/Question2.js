import React from "react";

const Question2 = ({ treeInput, onTreeInputChange, onStepChange }) => {

    return (
        <form>
            <label htmlFor="treeInput">Real tree, fake tree or no tree?</label>
            <input id="traditionInput" type="text" value={treeInput} onChange={onTreeInputChange} />

            <button onClick={onStepChange}>Next</button>
        </form>
    );
};

export default Question2;
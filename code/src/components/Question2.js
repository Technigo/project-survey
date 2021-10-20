import React from "react";

const Question2 = ({ treeInput, onTreeInputChange, onStepChange }) => {

    return (
        <form className="form">
        <label htmlFor="treeInput">What type of Christmas tree do you prefer?</label>
        <div className="radiobuttons-container">
            <label>
                <input
                    type="radio"
                    value="Real Tree"
                    onChange={() =>onTreeInputChange('Real Tree')}
                    checked={treeInput === 'Real Tree'}
                />
                <p>Real tree</p>
            </label>

            <label>
                <input
                    type="radio"
                    value="Fake tree"
                    onChange={() =>onTreeInputChange('Fake tree')}
                    checked={treeInput === 'Fake tree'}
                />
                <p>Fake tree</p>
            </label>

            <label>
                <input
                    type="radio"
                    value="No tree"
                    onChange={() =>onTreeInputChange('No tree')}
                    checked={treeInput === 'No tree'}
                />
                <p>No tree</p>
            </label>
        </div>

            <button onClick={onStepChange}>Next</button>

        </form>
    );
};

export default Question2;


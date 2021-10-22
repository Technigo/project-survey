import React from "react";

const Question2 = ({ treeInput, onTreeInputChange, onStepChange }) => {

    return (
        <form className="form">
            <label htmlFor="treeInput">2. What type of Christmas tree do you prefer?</label>
            <div className="radiobuttons-container">
                <div className="label-container">
                    <label className="radiobutton-label">
                        <input 
                            className="radiobutton-input"
                            type="radio"
                            value="Real tree"
                            onChange={() =>onTreeInputChange('Real tree')}
                            checked={treeInput === 'Real tree'}
                        />
                        <p className="radiobutton-p">Real tree</p>
                    </label>
                </div>

                <div className="label-container">
                    <label className="radiobutton-label">
                        <input 
                            className="radiobutton-input"
                            type="radio"
                            value="Fake tree"
                            onChange={() =>onTreeInputChange('Fake tree')}
                            checked={treeInput === 'Fake tree'}
                        />
                        <p className="radiobutton-p">Fake tree</p>
                    </label>
                </div>

                <div className="label-container">
                    <label className="radiobutton-label">
                        <input 
                            className="radiobutton-input"
                            type="radio"
                            value="No tree"
                            onChange={() =>onTreeInputChange('No tree')}
                            checked={treeInput === 'No tree'}
                        />
                        <p className="radiobutton-p">No tree</p>
                    </label>
                </div>
            </div>

            <button onClick={onStepChange}>Next</button>

        </form>
    );
};

export default Question2;


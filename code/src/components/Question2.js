import React from "react";

const Question2 = ({ treeInput, onTreeInputChange, onStepChange }) => {

    return (
        <form>
        <h2>What type of Christmas tree do you prefer?</h2>
        <div className="radiobuttons-container">
            <label>
                <input
                    type="radio"
                    value="Real tree"
                    onChange={() =>onTreeInputChange('Real tree')}
                    checked={treeInput === 'Real tree'}
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


 /* <form>
        <h2>What type of Christmas tree do you prefer?</h2>

            <div className="radiobuttons-container">
                {trees.map(tree => (
                    <div className="radiobutton">
                        <label 
                            htmlFor={trees}
                            aria-label={tree}
                            key={tree}>

                            <input
                                type="radio"
                                name="radio-tree"
                                id="radio-tree"
                                value={tree}
                                onChange={(selectRadioBtn) => onTreeInputChange(selectRadioBtn)}
                                checked={treeInput === tree}
                                required/> 
                            {tree}
                        </label>
                    </div>
                ))}
            </div>
            
            <button onClick={onStepChange}>Next</button>

        </form> */
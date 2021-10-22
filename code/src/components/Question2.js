import React from "react"

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
                            name="tree-type"
                            id="real-tree"
                            aria-checked="false"
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
                            name="tree-type"
                            id="fake-tree"
                            aria-checked="false"
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
                            name="tree-type"
                            id="no-tree"
                            aria-checked="false"
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
    )
}

export default Question2


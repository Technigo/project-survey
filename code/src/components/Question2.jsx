import React from "react"

const Question2 = ({ locationInput, onLocationInputChange, onStepChange }) => {

    return (
        <form className="form">
            <label htmlFor="treeInput">2. Festival location preference?</label>
            <div className="radiobuttons-container">
                <div className="label-container">
                    <label className="radiobutton-label">
                        <input 
                            className="radiobutton-input"
                            type="radio"
                            name="location-type"
                            id="indoor-fes"
                            aria-checked="false"
                            value="Indoor festival"
                            onChange={() =>onLocationInputChange('Indoor Festival')}
                            checked={locationInput === 'Indoor Festival'}
                        />
                        <p className="radiobutton-p">Indoor festival</p>
                    </label>
                </div>

                <div className="label-container">
                    <label className="radiobutton-label">
                        <input 
                            className="radiobutton-input"
                            type="radio"
                            name="location-type"
                            id="outdoor-fes"
                            aria-checked="false"
                            value="Outdoor festival"
                            onChange={() =>onLocationInputChange('Outdoor Festival')}
                            checked={locationInput === 'Outdoor Festival'}
                        />
                        <p className="radiobutton-p">Outdoor festival</p>
                    </label>
                </div>

                <div className="label-container">
                    <label className="radiobutton-label">
                        <input 
                            className="radiobutton-input"
                            type="radio"
                            name="location-type"
                            id="no-fes"
                            aria-checked="false"
                            value="No festival"
                            onChange={() =>onLocationInputChange('Do not care')}
                            checked={locationInput === 'Do not care'}
                        />
                        <p className="radiobutton-p">Do not care!</p>
                    </label>
                </div>
            </div>

            <button onClick={onStepChange}>Next</button>

        </form>
    )
}

export default Question2
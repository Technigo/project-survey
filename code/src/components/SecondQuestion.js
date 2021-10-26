import React from "react"

const SecondQuestion = ({ ageInput, onAgeChange, onStepChange }) => {
    return (
        <div className="container">
        <form>
            <label>
                <h2>How old are you?</h2>
            <select
                className="formControl" 
                value={ageInput}
                required
                onChange={onAgeChange}
                >
                    <option value="">Select your age</option>
                    <option value="0-12">0-12 yrs</option>
                    <option value="13-18">13-18 yrs</option>
                    <option value="19-29">19-29 yrs</option>
                    <option value="30-39">30-39 yrs</option>
                    <option value="40-49">40-49 yrs</option>
                    <option value="50-59">50-59 yrs</option>
                    <option value="60-69">60-69 yrs</option>
                    <option value="70-79">70-79 yrs</option>
                    <option value="80-89">80-89 yrs</option>
                    <option value="90-99">90-99 yrs</option>
                    <option value="100+">100+ yrs</option>
            </select>
                <button
                className="btn" 
                disabled={ageInput === ''}
                onClick={onStepChange}
                >Next question</button>
                </label>
        </form>
        </div>
    )
}
export default SecondQuestion
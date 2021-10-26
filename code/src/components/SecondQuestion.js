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
                    <option value="19-25">19-25 yrs</option>
                    <option value="26-35">26-35 yrs</option>
                    <option value="36-45">36-45 yrs</option>
                    <option value="46-55">46-55 yrs</option>
                    <option value="56-65">56-65 yrs</option>
                    <option value="66-75">66-75 yrs</option>
                    <option value="76-85">76-85 yrs</option>
                    <option value="86-95">86-95 yrs</option>
                    <option value="96+">96+ yrs</option>
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
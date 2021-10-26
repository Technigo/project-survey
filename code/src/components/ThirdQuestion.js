import React from "react"


const ThirdQuestion = ({ noOfConfession, onNoOfConfessionChange }) => {
    return (
        <div className="container">
            <h2>Is this your first confession?</h2>
        <form>
            <label>
                <input
                className="formControl" 
                type="radio"
                value="yes"
                onChange={() => onNoOfConfessionChange('yes')}
                checked={noOfConfession === 'yes'}
                />
                <p className="radioText">Yes</p>
            </label>

            <label>
                <input
                className="formControl" 
                type="radio"
                value="no"
                onChange={() => onNoOfConfessionChange('no')}
                checked={noOfConfession === 'no'}
                />
                <p className="radioText">
                    No
                </p>
                </label>
        </form>
        </div>
    )
}
export default ThirdQuestion
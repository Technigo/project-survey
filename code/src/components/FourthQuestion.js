import React from 'react'

const FourthQuestion = ({ favoriteInput, onFavoriteInputChange, onStepChange, onStepChangeBack }) => {
    return (
        <form>
            <label htmlFor="favoriteInput">What's your favorite language</label>
            <select value={favoriteInput} onChange={onFavoriteInputChange}>
                <option value="">Select your favorite language:</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JS">JS</option>
            </select>
            <img className="progress" src="./assets/q4.svg" alt="question-step-4"></img>
            <div className="buttons">
                <button onClick={onStepChangeBack}>&#9669; Previous</button>
                <button disabled={favoriteInput === ''} onClick={onStepChange}>Next &#9659;</button>
            </div>
        </form>
    )
}

export default FourthQuestion
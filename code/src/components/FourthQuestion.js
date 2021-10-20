import React from 'react'

const FourthQuestion = ({ favoriteInput, onFavoriteInputChange, onStepChange, onStepChangeBack }) => {
    return (
        <form>
            What's your favorite language
            <select value={favoriteInput} onChange={onFavoriteInputChange}>
                <option value="">Select your favorite language:</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JS">JS</option>
            </select>
            <button disabled={favoriteInput === ''} onClick={onStepChange}>Next question</button>
            <button onClick={onStepChangeBack}>Previous Question</button>
        </form>
    )
}

export default FourthQuestion
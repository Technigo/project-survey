import React from 'react'

const FourthQuestion = ({ favoriteInput, onFavoriteInputChange, onStepChange }) => {
    return (
        <form>
            <select value={favoriteInput} onChange={onFavoriteInputChange}>
                <option value="">Select your favorite:</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Fox">Fox</option>
            </select>
            <button onClick={onStepChange}>Next question</button>
        </form>
    )
}

export default FourthQuestion
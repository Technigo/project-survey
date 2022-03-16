import React from "react"

const Question1 = ({ favoriteInput, onFavoriteInputChange, onStepChange }) => {

    return (
        <form className="form">
            <label htmlFor="favoriteInput">1. Favorite EDM genre?</label>
            <input 
                id="favoriteInput" 
                type="text" 
                value={favoriteInput} 
                onChange={onFavoriteInputChange}
                placeholder="Type your answer here"
            />

            <button onClick={onStepChange}>Next</button>
        </form>
    )
}

export default Question1
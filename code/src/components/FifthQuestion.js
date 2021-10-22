import React from 'react'

const FifthQuestion = ({ ratingInput, onRatingInputChange, onStepChange, onStepChangeBack, favoriteInput }) => {
    return (
        <form>
            <label htmlFor="ratingInput">Rate your {favoriteInput} knowledge</label>
            <label>
                <input 
                    type="radio"
                    value="1"
                    onChange={onRatingInputChange}
                    checked={ratingInput === "1"}
                />
                1
            </label>
            <label>
                <input 
                    type="radio"
                    value="2"
                    onChange={onRatingInputChange}
                    checked={ratingInput === "2"}
                />
                2
            </label>
            <label>
                <input 
                    type="radio"
                    value="3"
                    onChange={onRatingInputChange}
                    checked={ratingInput === "3"}
                />
                3
            </label>
            <label>
                <input 
                    type="radio"
                    value="4"
                    onChange={onRatingInputChange}
                    checked={ratingInput === "4"}
                />
                4
            </label>
            <label>
                <input 
                    type="radio"
                    value="5"
                    onChange={onRatingInputChange}
                    checked={ratingInput === "5"}
                />
                5
            </label>
            <img className="progress" src="./assets/q5.svg" alt="question-step-5"></img>
            <div className="buttons">
                <button onClick={onStepChangeBack}>&#9669; Previous</button>
                <button disabled={ratingInput === ''} onClick={onStepChange}>Next &#9659;</button>
            </div>
        </form>
    )
}

export default FifthQuestion
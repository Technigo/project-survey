import React from 'react'
 export const ThirdQuestion = ({ interestInput,onintererestInputChange, onStepChange }) => {
    return (
        <form onSubmit={onStepChange}>
            <fieldset className="fieldset">
                <legend>
                    <strong>Your interests</strong>
                </legend>
                <p>Whats your main interestfield?</p>
                <label htmlFor="cinema">
                    <input type="radio" 
                            id="cinema"
                            value="movies"
                            name="favourite"
                           
                            onChange={onintererestInputChange}
                            checked={interestInput === "movies"} />
                    &nbsp;Movies and Cinema
                </label><br />
                <label htmlFor="music">
                    <input type="radio"
                            id="music"
                            value="music events"
                            name="favourite"
                           
                            onChange={onintererestInputChange}
                            checked={interestInput === "music events"} />
                    &nbsp;Music
                </label><br />
                <label htmlFor="Restaurants and bars">
                    <input type="radio"
                            id="restauranst"
                            value="restaurants and bars"
                            name="favourite"
                           
                            onChange={onintererestInputChange}
                            checked={interestInput === "restaurants and bars"} />
                    &nbsp;Restauranst and Bars
                </label>
            </fieldset>
            <button className="btn" type="submit"><span>See your answers!</span></button>
        </form>

    )
}


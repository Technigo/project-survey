import React from 'react'

const Step3Fav = ({ favInput, onFavInputChange, onStepChange }) => {
    return (
        <form onSubmit={onStepChange}>
            <fieldset>
                <legend>
                    <strong>Favourite genre in the cinema!</strong>
                </legend>
                <p>Which kind of movie do you enjoy the most on the big screen?</p>
                <label htmlFor="romcom">
                    <input type="radio" 
                            id="romcom"
                            value="romantic comedy"
                            name="favourite"
                            required
                            onChange={onFavInputChange}
                            checked={favInput === "romantic comedy"} />
                    &nbsp;Romantic comedy with a loved one
                </label><br />
                <label htmlFor="action">
                    <input type="radio"
                            id="action"
                            value="popcorn action flick"
                            name="favourite"
                            onChange={onFavInputChange}
                            checked={favInput === "popcorn action flick"} />
                    &nbsp;Popcorn action with my buddies
                </label><br />
                <label htmlFor="horror">
                    <input type="radio"
                            id="horror"
                            value="scary horror"
                            name="favourite"
                            onChange={onFavInputChange}
                            checked={favInput === "scary horror"} />
                    &nbsp;Jump-scare horror flick with the BFF
                </label>
            </fieldset>
            <button type="submit">See your answers!</button>
        </form>

    )
}

export default Step3Fav
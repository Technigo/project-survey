import React from 'react'

const Step2SLJ = ({ samuelInput, onSamuelInputChange, onStepChange }) => {
    return (
        <form onSubmit={onStepChange}>
            <fieldset>
                <legend>
                    <strong>Samuel L Jackson movie lines!</strong>
                </legend>
                <p>Do you know which movie they're from?</p>
                <label htmlFor="SLJQuote"></label>
                <select className="SLJQuote"
                        value={samuelInput}
                        onChange={onSamuelInputChange}
                        required>
                    <option value="" disabled selected>Pick your favourite and find out in the end!</option>
                    <option value="Pulp Fiction (1994)">
                        "And you will know my name is the lord when I lay my vengeance upon you!"
                    </option>
                    <option value="Snakes on a Plane (2006)">
                        "I've had it with these MF snakes on this MF plane!"
                    </option>
                    <option value="Die Hard with a Vengeance (1995)">
                        "Zeus! You got a problem with that?!"
                    </option>
                    <option value="The Avengers (2012)">
                        "Given that it's a stupid-ass decision, I've elected to ignore it."
                    </option>
                </select>
            </fieldset>
            <button type="submit">Next!</button>
        </form>

    )
}

export default Step2SLJ
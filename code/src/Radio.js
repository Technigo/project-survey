import React from 'react'
import './radio.css'

export const Radio = () => {
    return (
        <>
            <h2>How old are you dude?</h2>
            <div>
                <form className="radio-container">
                        <label for="baby"><input type="radio" id="baby" name="age" value="20" />Not old at all, just a baby.(0-20)</label>
                        <label for="prime"><input type="radio" id="prime" name="age" value="60" />In my prime!(21-60)</label>
                        <label for="oldiebutgoldie"><input type="radio" id="oldiebutgoldie" name="age" value="100" />Can't even remember.(61-100)</label>
                </form>
            </div>
        </>
    )
}
import React, { useState } from "react"

export const SubmitButton = ({onStepChange}) => {

    return (

        <div className="submit-container">
            <h3>Want to find a suitable game?</h3>
            <button onClick={onStepChange}>Find game</button>
        </div>
    )
}
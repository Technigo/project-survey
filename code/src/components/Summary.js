/* eslint-disable indent */
import React from 'react';

const Summary = ({ nameInput, radioBtn, selectBtn, resetForm }) => {
    return (
        <div>
            <h3>Summary:</h3>
            <ul>
                <li>{nameInput}</li>
                <li>{radioBtn}</li>
                <li>{selectBtn}</li>
            </ul>
            <div>
                <button type="button" onClick={resetForm}>Reset</button>
            </div>
        </div>
    )
}

export default Summary
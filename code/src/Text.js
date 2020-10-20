import React from 'react'

export const Text = ({ handleTextInput, textInput }) => {

    return <div>
        <label htmlFor="text">I feel the need for</label>
        <input type="text" id="test" name="text" value={textInput} onChange={e => { handleTextInput(e.target.value) }} />
    </div>
}
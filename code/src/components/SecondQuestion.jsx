import React, { useState } from 'react'
import ThirdQuestion from './ThirdQuestion'

const SecondQuestion = ({ onQuestionChange, alias, onAliasChange }) => {
    return (
        <form>
            <label htmlFor="alias">Choose your alias:</label>
            <input 
                id="alias" 
                type="text" 
                value={alias}
                onChange={onAliasChange}
            />
            <button onClick={onQuestionChange}>Submit</button>
        </form>
    )
}

export default SecondQuestion
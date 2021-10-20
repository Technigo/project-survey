import React from 'react'

const radioButtonInputs = ['Happy', 'Bored', 'Hungry', 'Candy?']

const UserInfo = ({ aliasInput, onAliasInputChange, radioButtonInput, onRadioButtonChange, onStepChange }) => {
    return (
        <div className="alias-buttons-container">
            <h2 className="question">What's your alias?</h2>
            <form className="form-style">
                <label htmlFor="aliasInput" className="form-label">Your Alias</label>
                <input className="input-form" id="aliasInput" type="input" value={aliasInput} onChange={onAliasInputChange} placeholder="Your Alias">
                </input>
            </form>

            <h2 className="question">How are you feeling today?</h2>
            <form className="radio-buttons-container">
                {radioButtonInputs.map(radiobutton => (
                    <label className="radio-button-overlay" key={radiobutton}>
                        <input
                            className="radio-button"
                            type="radio"
                            value={radiobutton}
                            onChange={onRadioButtonChange}
                            checked={radioButtonInput === radiobutton} required>
                        </input>
                        {radiobutton}
                    </label>

                ))}
            </form>
            <button className="button-next" type="submit" onClick={onStepChange}>Next Question!</button>
        </div>
    )

}

export default UserInfo
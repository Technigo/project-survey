import React from 'react'

const radioButtonInputs = ['Happy', 'Bored', 'Hungry', 'Candy?']

const UserInfo = ({ aliasInput, onAliasInputChange, radioButtonInput, onRadioButtonChange, onStepChange }) => {
    return (
        <div className="alias-buttons-container">
            <h2 className="user-alias-question">What's your alias?</h2>
            <form className="alias-name">
                <label htmlFor="aliasInput"></label>
                <input className="input-form" id="aliasInput" type="text" value={aliasInput} onChange={onAliasInputChange} >
                </input>
            </form>

            <h2 className="user-preference-question">How are you feeling today?</h2>
            <form className="radio-buttons-container">
                {radioButtonInputs.map(radiobutton => (
                    <label key={radiobutton}>
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
import React from 'react'

const radioButtonInputs = ['Apple', 'Banana', 'Ananas', 'Pear']

const UserInfo = ({ aliasInput, onAliasInputChange, radioButtonInput, onRadioButtonChange, onStepChange }) => {
    return (
        <div>
            <h2>What's your alias?</h2>
            <form className="alias-name">
                <label htmlFor="aliasInput"></label>
                <input id="aliasInput" type="text" value={aliasInput} onChange={onAliasInputChange}>
                </input>
            </form>

            <h2>What's your favorite fruit?</h2>
            <form className="radio-buttons-container">
                {radioButtonInputs.map(radiobutton => (
                    <label key={radiobutton}>
                        <input
                            type="radio"
                            value={radiobutton}
                            onChange={onRadioButtonChange}
                            checked={radioButtonInput === radiobutton}>

                        </input>
                        {radiobutton}
                    </label>

                ))}
            </form>
            <button onClick={onStepChange}>Next Question!</button>
        </div>
    )

}

export default UserInfo
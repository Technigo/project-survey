import React from 'react'

const Dropdown = ({ 
    dropdownInput, 
    onDropdownInputChange, 
    onStepChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<>
        <article className="survey-article">
		<h2>Type of artist:</h2>
		<form>
            <select value={dropdownInput} onChange={onDropdownInputChange}>
                <option value="">Select your favorite:</option>
                <option value="Lastkaj 14">Lastkaj 14</option>
                <option value="Tenacious D">Tenacious D</option>
                <option value="Elton John">Elton John</option>
            </select>
        <button onClick={onStepChange}>Next questions</button>
		</form>
		</article>
		</>
	)
}

export default Dropdown

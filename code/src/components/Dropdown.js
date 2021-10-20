import React from 'react'

const Dropdown = ({ 
    dropdownInput, 
    onDropdownInputChange, 
    onStepChange }) => {
	// const { nameInput, onNameInputChange } = props;

	return (
		<>
        <article className="survey-article">
		<h2>Best movie?</h2>
		<form className="form" onSubmit={event => event.preventDefault()}>
            <select 
            value={dropdownInput} 
            onChange={onDropdownInputChange}
            required
            className="dropdown-label"
            >
                <option value="">Choose your favorite:</option>
                <option value="the thing">The thing (1982)</option>
                <option value="halloween">Halloween (1978)</option>
                <option value="a nightmare on elm street">A nightmare on elm street (1984)</option>
                <option value="scream">Scream (1996)</option>
                <option value="night of the living dead">Night of the living dead (1968)</option>
                <option value="psycho">Psycho (1960)</option>
                <option value="the birds">The birds (1963)</option>

            </select>
            <input className="btn" type="submit" value="continue" onClick={onStepChange} />
		</form>
		</article>
		</>
	)
}

export default Dropdown

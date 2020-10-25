import React from 'react';

const SelectInput = ({question, selectValue, setSelectValue, showNext}) => {

    return( 
    <label htmlFor="select-city"><h3>{question}</h3>
        <select onChange={event => setSelectValue(event.target.value)} id="select-city" name="select-city" required>
            <option value="">Choose one...</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Other">Other</option>
        </select>
        <button className="next-button" onClick={showNext}>Next</button>

    </label>

    )
}

export default SelectInput;
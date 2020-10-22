import React from 'react';

const SelectInput = ({selectValue, setSelectValue}) => {

    return( 
    <label htmlFor="select-city">Select a city {selectValue}
        <select name="Select" onChange={event => setSelectValue(event.target.value)} id="select-city">
            <option value="">Choose one...</option>
            <option value="Stockholm">Stockholm</option>
            <option value="Umeå">Umeå</option>
            <option value="Milan">Milan</option>
        </select>
    </label>

    )
}

export default SelectInput;
import React, { useState } from "react";

const Location = ({city, onCityChange, onStepChange}) => {

    // const [city, setCity] = useState('')

    return (
    <form>
        <h3>In which city did you join our event?</h3>
    <select 
        onChange={event => onCityChange(event.target.value)}
        value={city}
    >
        <option disabled value="">Select location:</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Gothenburg">Gothenburg</option>
        <option value="Copenhagen">Copenhagen</option>
    </select>
    <button onClick={onStepChange}>Continue</button>
    </form>
    )
}

export default Location
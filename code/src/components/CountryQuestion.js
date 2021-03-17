import React, { useState } from 'react';

export const CountryQuestion = () => {
    const [country, setCountry] = useState('');

const onCountryChanged = (event) => {
    console.log(event.target.value);
    setCountry (event.target.value);
};

return(
<div className="country-question">
<label htmlFor="country">Pick a country?</label>
<select id="country" value={country} onChange={onCountryChanged} required>
    <option value="">Select</option>
    <option value="italy">Italy</option>
    <option value="spain">Spain</option>
    <option value="france">France</option>
    <option></option>
</select>
</div>
)
}
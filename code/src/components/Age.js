import React, { useState } from 'react';

export const Age = () => {
    const [age, setAge] = useState('');
    return (
        <div className="form-components">
            <label htmlFor="age">How old are you:</label>
            <select
                onChange= {event => setAge(event.target.value)}
                value={age}
                ref="age"
            >
                <option value="">select age group</option>
                <option value="0-18">0-18</option>
                <option value="19-29">19-29</option>
                <option value="30-39">30-39</option>
                <option value="40-49">40-49</option>
                <option value="50-59">50-59</option>
                <option value="60-65">60-65</option>
                <option value="Retired">Retired</option>
            </select>
        </div>
    )
}
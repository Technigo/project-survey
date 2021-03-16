import React from 'react';

import { Button } from './Button';

export const Select = props => {
    const country = ["Sweden", "Norway", "Denmark", "Finland"];

    return (
        <>
        <label htmlFor="select" className="question-title">Where are you from?</label>
        <select
            id="select"
            value={props.value}
            className="select"
            onChange={props.onChange}
            required >
            <option value="">Choose:</option>
            {country.map(item => 
                <option key={item} value={item}>{item}</option>
            )}
        </select>
        <Button 
            button="CONTINUE" />
        </>
    )

}
import React, {useState} from 'react'

export const Age = ({age, setAge}) => {
    // console.log(age);

    return (
    <label>
        Are you 18 years or older?
        <input
        type="radio"
        value="yes"
        onChange={event => setAge(event.target.value)}
        checked={age === "yes"}
        required
        />
        Yes
        <input
        type="radio"
        value="no"
        onChange={event => setAge(event.target.value)}
        checked={age === "no"}
        required
        />
        No
    </label> 
    );
};
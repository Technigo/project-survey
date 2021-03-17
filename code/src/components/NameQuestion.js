import React, { useState } from 'react';

export const NameQuestion = () => {
const [name, setName] = useState('');

const onNameChanged = (event) => {
    console.log(event.target.value);
    setName (event.target.value);
}
return(
    <>
    <div className="name-question">
        <label htmlFor="name">What is your name?</label>
        <input id="name" type="text" value={name} onChange={onNameChanged} required />
    </div>
    </>
    )
}
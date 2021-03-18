import React, { useState } from 'react';
import Question2 from './Question2';

const Question1 = () => {
    const [name, setName] = useState('');

    const onNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const renderQuestion = () => {
        console.log ("next clicked")
        return ( <Question2/> )
    }


    return (
        <form onSubmit={event => event.preventDefault()}>
            <div>
                <label htmlFor="name">Name: </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={onNameChange}
                />
            </div>
        </form>
    )
}

export default Question1;
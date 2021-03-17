import React, { useState } from 'react';

const Question1 = () => {
    const [name, setName] = useState('');

    const onNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
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
                 <button type="submit">NEXT</button>
            </div>
        </form>
    )
}

export default Question1;
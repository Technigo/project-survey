import React, { useState } from 'react';

const Question1 = () => {
    const [name, setName] = useState('');

    const onNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
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
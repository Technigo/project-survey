import React, { useState } from 'react'

const TextInput = () => {
    const [name, setName] = useState ('')

    const onNameChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    return (
        <div>
            <label htmlFor="name">Name</label>
            <input 
                id="name"
                type="text"
                value={name}
                placeholder="Jane Doe"
                onChange={onNameChange}
            />
        </div>
    )
}

export default TextInput
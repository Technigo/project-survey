import React, { useState } from "react";


const NameInput = () => {
    const [name, setName] = useState('')

    const onNameChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value);
    }
    return (
        <div>
            <label htmlFor="name">What's your name?</label>
            <input
                id="name"
                type="text"
                value={name}
                onChange={onNameChange}
            />
        </div>
    )

}

export default NameInput;
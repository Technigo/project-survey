import React, { useState } from 'react';

const TextInputName = (props) => {
    const [name, setName] = useState("")

    const onNameChange = (event => {
        setName(event.target.value)
    })
    //if (name !== "") {
        //return <p>Here is my name: {name}</p>
    //}
    //else {
        return (
            <div className="text-input-wrapper">
                <label htmlFor="name">{props.label}</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={onNameChange}
                    
                />
            <button>Submit</button>
            <p>Here is my name: {name}</p>
            </div>

        )
    //}
}
export default TextInputName
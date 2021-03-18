import React from 'react';

const TextInputName = ({name, setName, email, setEmail}) => {
    const onNameChange = event => {
        setName(event.target.value)
    }

    const onEmailChange = event =>{
        setEmail(event.target.value)
    }
   
        return (
            <div className="text-input-wrapper">
                <h3>Please let us know how to contact you</h3>
                <label htmlFor="name">name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={onNameChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={onEmailChange}
                />
            <p>Here is my name: {name}</p>
            </div>

        )
}
export default TextInputName
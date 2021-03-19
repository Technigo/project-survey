import React, { useState } from "react";





const Form = () => {


    const [name, setName] = useState('')

    const onNameChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value);
    }
    return (
        <form>
            <div>
                <label htmlFor="name">What's your name?</label>
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

export default Form
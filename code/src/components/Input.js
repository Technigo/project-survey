import React, { useState } from 'react';

const Input = () => {
    const [inputName, setInputName] = useState ('');

    const onInputNameChange = (e) => {
        setInputName(e.target.value);
    }

    return(
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    id="name" 
                    type="text"
                    value={inputName}
                    onChange={onInputNameChange}
                />
            </div>
        </form>
    )
}

export default Input;
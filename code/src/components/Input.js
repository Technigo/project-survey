import React, { useState } from 'react';

const Input = () => {
    const [inputName, setInputName] = useState ('');

    const onInputNameChanged = (e) => {
        setInputName(e.target.value);
        console.log(e.target.value);
    }

    return(
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    id="name" 
                    type="text"
                    value={inputName}
                    onChange={onInputNameChanged}
                />
            </div>
        </form>
    )
}

export default Input;
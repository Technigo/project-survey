import React from 'react'

const InputForm = ({name, setName}) => {
    
    return(
        <div className="input-form-div">
            <label className="input-fields">
            Your name is: {name}
            <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
            required
            />
            </label>
        </div>
    )
}

export default InputForm;
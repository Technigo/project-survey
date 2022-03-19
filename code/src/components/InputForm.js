import React from 'react'

const InputForm = ({input, setInput}) => {
    
    return (
        <div className="input-form-div">
            <label className="input-fields">
            Your name is:  {input.name}
            <input
            type="text"
            name="name"
            onChange={event => setInput({...input, [event.target.name]: event.target.value})}
            value={input.name}
            required
            />
            </label>
        </div>
    )
}

export default InputForm;
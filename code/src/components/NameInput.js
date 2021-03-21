import React from "react";


const NameInput = (props) => {

    return (
        <div className="text-input-container">
            <label className="text-input-label" htmlFor="name">What's your name?</label>
            <input
                id="name"
                type="text"
                value={props.name}
                onChange={props.onNameChange}
            />
        </div>
    )

}

export default NameInput;
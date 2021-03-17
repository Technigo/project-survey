import React from "react";



 export const NameQuestion = ({ id, name, setName }) => {
    const onSetName  = (e) => {
    console.log(`Name: ${e.target.value}`);
    setName(e.target.value); }

    return(
        <div className="questions-container">
            <div className="form">
                <label className="label">
                    Whats your name?
                        <input
                            className="text-input"
                            type="text"
                            id={id}
                            onChange={(e) => onSetName(e)}
                            value={name}
                        />
                </label>
            </div>
        </div>    
    );
};


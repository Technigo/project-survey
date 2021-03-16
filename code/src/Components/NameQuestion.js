import React, { useState } from "react";



 export const NameQuestion = () => {
    const [name, setName] =useState("");

    return(
        <div className="questions-container">
            <form className="form">
                <label className="label">
                    Whats your name?
                        <input
                            className="text-input"
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                </label>
            </form>
        </div>    
    );
};


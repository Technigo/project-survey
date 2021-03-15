import React, { useState } from "react";



 export const NameQuestion = () => {
    const [name, setName] =useState("");

    return(
        <form>
            <label>
                Whats your name?
                    <input
                        type="test"
                        onChange={event => setName(event.target.value)}
                        value={name}
                    />
            </label>
        </form>
    );
};


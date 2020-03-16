import React, { useState } from "react";

export const FreeText = () => {
    const  [text, setText] = useState("");

    return (
        <div>
            <h2>Please let us know if you have any allergies, food preferences or anything else you want us to know:</h2>
            <label className="text" >
                <input
                    className="text-preferences"
                    type="text"
                    onChange={event => setText(event.target.value)}
                    value={text}
                />
            </label>
        </div>
    )
}
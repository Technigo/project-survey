import React, { useState } from "react";

export const FreeText = () => {
    const  [text, setText] = useState("");

    return (
        <div>
            <h2>Please let us know if you have any allergies or food preferences:</h2>
            <input
                type="text"
                onChange={event => setText(event.target.value)}
                value={text}
            />
        </div>
    )
}
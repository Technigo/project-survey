import React, { useState } from "react";

export const EyeQuestion = () => {
    const [eyeColor, setEyeColor] = useState("");
console.log(eyeColor)

    return(
        <div className="questions-container">
            <label className="label">
                What's the color of your eyes?
                    <select 
                    className="select-eyecolor"
                    onChange={event => setEyeColor(event.target.value)}
                    value={eyeColor}
                    >
                        <option value="Brown">Brown</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                    </select>
            </label>
        </div>
    );
};


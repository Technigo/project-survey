import React, { useState } from "react";

export const EyeQuestion = ({ eyeColor, setEyeColor}) => {
     const onSetEyeColor = (e) => {
    console.log(`Eyecolor: ${e.target.value}`);
    setEyeColor(e.target.value); }

    return(
        <div className="questions-container">
            <label className="label">
                What's the color of your eyes?
                    <select 
                    className="select-eyecolor"
                    onChange={(e) => onSetEyeColor(e)}
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


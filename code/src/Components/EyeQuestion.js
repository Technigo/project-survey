import React, { useState } from "react";

export const EyeQuestion = () => {
    const [eyeColor, setEyeColor] = useState("");

    return(
        <form>
            <label>
                Whats the color of your eyes?
                    <select
                    onChange={event => setEyeColor(event.target.value)}
                    value={eyeColor}
                    >
                        <option value="Brown">Brown</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                    </select>
            </label>
        </form>
    );
};


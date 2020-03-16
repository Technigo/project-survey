import React, { useState } from "react";

const dinnerTimes = ["18.00", "18.30", "19.00", "19.30", "20.00", "20.30", "21.00", "21.30", "22.00"];

export const RadioButton3 = () => {
    const [dinnerTime, setDinnerTime] = useState();

    return (
        <div>
            <h2>Select a time:</h2>
            <div className="radio-buttons">
                {dinnerTimes.map(time => (
                    <label className="radio-container" key={time}>
                        <input 
                            type="radio"
                            value={time}
                            onChange={event => setDinnerTime(event.target.value)}
                            checked={dinnerTime === time}
                        />
                        <span className="radiomark"></span>
                        {time}
                    </label>
                ))}
            </div>
        </div>
    );
};
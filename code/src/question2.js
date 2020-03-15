import React, { useState } from "react";

const amountGuests = ["1", "2", "3", "4", "5", "6", "7", "8"];

export const RadioButton1 = () => {
    const [amountGuest, setAmountGuest] = useState();

    return (
        <div>
            <h2>How many will you be?</h2>
            {amountGuests.map(guest => (
            <label key={guest}>
                <input 
                    type="radio"
                    value={guest}
                    onChange={event => setAmountGuest(event.target.value)}
                    checked={amountGuest === guest}
                />
                {guest}
            </label>
            ))}
        </div>
    );
};
import React, { useState } from "react";

export const Dropdown = () => {
    const [location, setLocation] = useState("");

    return (
        <div>
            <h2>Select which restaurant you'd like to visit below to start your booking!</h2>
            <select
            onChange={event => setLocation(event.target.value)}
            value={location}
            >
                <option value="">Select location:</option>
                <option value="stockholm">Stockholm</option>
                <option value="are">Åre</option>
                <option value="visby">Visby</option>
            </select>
        </div>
        
    );
};
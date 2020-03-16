import React, { useState } from "react";

export const Dropdown = () => {
    const [location, setLocation] = useState("");

    return (
        <div>
            <h2>Select the restaurant you'd like to visit below, to start your booking!</h2>
            <label className="dropdown">
                <select className="dropdown-style"
                onChange={event => setLocation(event.target.value)}
                value={location}
                required
                >
                    <option value="">Select location:</option>
                    <option value="stockholm">Stockholm</option>
                    <option value="are">Åre</option>
                    <option value="visby">Visby</option>
                </select>
            </label>
        </div>
    );
};
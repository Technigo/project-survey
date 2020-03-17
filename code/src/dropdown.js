import React from "react";

export const Dropdown = (props) => {
    const { location, setLocation } = props;

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
                    <option value="Stockholm">Stockholm</option>
                    <option value="Åre">Åre</option>
                    <option value="Visby">Visby</option>
                </select>
            </label>
        </div>
    );
};
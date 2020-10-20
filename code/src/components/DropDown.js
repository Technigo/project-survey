import React, { useState } from 'react';

export const DropDown = () => {
    const [location, setLocation] = useState();

    return (
        <form className="drop-down">
            <p>Which of our business city are you in ...</p>
            <select
                onChange={event => setLocation(event.target.value)}
                value={location}
            >
                <option value="">Select Location</option>
                <option value="Stockholm">Stockholm</option>
                <option value="Oslo">Oslo</option>
                <option value="Copenhagen">Copenhagen</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Mumbai">Mumbai</option>
            </select>
        </form>

    );
};
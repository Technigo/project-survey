import React, { useState } from 'react'
import "./components/drop.css";

export const Drop = () => {
    const [location, setLocation] = useState("");
    return (
        <form>
            <h4>dropdown</h4>
            <select
                onChange={event => setLocation(event.taget.value)}
                value={location}
            >
                <option value="">Select location:</option>
                <option value="stockholm">Stockholm</option>
                <option value="barcelona">Barcelona</option>
                <option value="oslo">Oslo</option>
            </select>
        </form>
    )
}
import React, { useState } from 'react'
import "./components/button.css";

export const Button = () => {
    const [temperature, setTemperature] = useState(20);
    return (
        <div className="button">

            <h3>Button h3 temperature: {temperature} degrees</h3>

            <button onClick={() => setTemperature(-5)}>Freeze!</button>
            <button onClick={() => setTemperature(30)}>Warm!</button>
            <button onClick={() => setTemperature(120)}>Boil!</button>

            {temperature > 100 && <p>Steamy</p>}
        </div>

    )
}
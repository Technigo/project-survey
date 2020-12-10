import React from "react";
 
const consumptionOptions = [
    "read the printed book",
    "read the e-book",
    "listen to the audio book"
];

export const Consumption = ({ favConsumption, onConsumptionChange }) => {
    return (
        <>
            <section className="question">
                <label tabIndex="0" htmlFor="consumption" className="dropdown">
                    How do you prefer to enjoy a book?
                        <select
                            id="consumption"
                            onChange={event => onConsumptionChange(event.target.value)}
                            value={favConsumption}
                            required
                            >
                            <option value="">Select...</option>
                            {consumptionOptions.map((option) => (
                                <option value={option}>{option}</option>
                            ))}
                        </select>
                </label>
            </section>
        </>
    );
};

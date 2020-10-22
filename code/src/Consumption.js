import React from "react"
 
const consumptionOptions = [
    "read the printed book",
    "read the e-book",
    "listen to the audio book"
]

export const Consumption = ({ favConsumption, onConsumptionChange }) => {
    return (
        <>
            <section className="question">
                <label className="dropdown">
                    How do you prefer to consume a book?
                        <select
                            onChange={event => onConsumptionChange(event.target.value)}
                            value={favConsumption}
                            >
                            <option value="">Select...</option>
                            {consumptionOptions.map((option) => (
                                <option value={option}>{option}</option>
                            ))}
                        </select>
                </label>
            </section>
        </>
    )
}
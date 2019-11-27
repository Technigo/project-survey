import React from "react";

export const Summary = (props) => {
    return (
        <div className="summary">
            <h2>Thank you for your answers {props.name}! </h2>
            <h3>Your chosen location: {props.location}</h3>
            <h3>Your age group: {props.ageGroup}</h3>
        </div>
    )
}
import React from "react";

export const Summary = (props) => {
    return (
        <div className="summary">
            <h2>Thank you for your order! We have sent an email to {props.name} with some more info.</h2>
            <h3>Your chosen size: {props.location}</h3>
            <h3>Your preferred color: {props.ageGroup}</h3>
            <h3><i>Stay Safe!</i></h3>
        </div>
    )
}
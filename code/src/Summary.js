import React from 'react'

export const Summary = (props) => {

    const { name, location, ageGroup } = props;

    return (
    <section className="summary-section" id="summary">
        <h2>Summary of survey</h2>
        <p>Thank you {name}. Your current location is {location} and your age is {ageGroup}.</p>
    </section>
);
};
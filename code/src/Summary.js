import React from 'react'

export const Summary = (props) => {

    const { location, ageGroup } = props;

    return (
    <section className="summary-section" id="summary">
        <h2>Summary of survey</h2>
        <p>Your current location is {location} and your age is {ageGroup}.</p>
    </section>
);
};
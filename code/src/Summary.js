import React from 'react'

export const Summary = (props) => {

    const { Location, group } = props;

    return (
    <section className="summary-section" id="summary">
        <h2>Summary of survey</h2>
        <p>Question 1 {Location} and {group}. Question 2 {Location} and {group}.</p>
    </section>
);
};
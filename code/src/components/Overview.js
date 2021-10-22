import React from 'react';

const Overview = ({ nameInput, surnameInput, seasonInput, temp }) => {
    return (
        <section className="section">
            <h2>Your summary of answers: </h2>
            <p>Name: {nameInput}</p>
            <p>Surname: {surnameInput}</p>
            <p>Favorite season: {seasonInput}</p>
            <p>Preffered outdoor temperature: {temp}</p>
        </section>
    );
};

export default Overview;
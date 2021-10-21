import React from 'react';
import './overview.css'
const Overview = ({ nameInput, surnameInput, weakness, strength }) => {
    return(
        <section className="summary">
        <h2>My values from form :</h2>
        <p>Name : {nameInput}</p>
        <p>Surname : {surnameInput}</p>
        <p>You believe your weakness is {weakness}</p>
        <p>You believe your strength is {strength} </p>
        </section>
    );
};

export default Overview;
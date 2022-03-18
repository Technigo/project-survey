import React from "react";

const Overview = ({ nameInput, days, where }) => {
    return (
        <section className="summary">
            <h2>Summering</h2>
            <p style={{color: 'purple'}}>Namn : {nameInput}</p>
            <p>Du vill träffas: {days} </p>
            <p>Du vill träffas: {where} </p>
            
        </section>
    );
};

export default Overview;


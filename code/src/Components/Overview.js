import React from "react";

const Overview = ({ nameInput, days, where }) => {
    return (
        <div className="main">
        <div className="container">
        <div className="summary">
            <h2>Summering</h2>
            <p>Namn : {nameInput}</p>
            <p>Du vill träffas: {days} </p>
            <p>Du vill träffas: {where} </p>
            
       </div>
       </div>
       </div>
    );
};

export default Overview;


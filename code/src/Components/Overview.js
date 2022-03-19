import React from "react";

const Overview = ({ nameInput, days, where }) => {
    return (
        <div className="main">
        <div className="container">
        <div className="summary">
            <h2 tabIndex="0">Summering</h2>
            <p tabIndex="0">Namn : {nameInput}</p>
            <p tabIndex="0">Du vill träffas: {days} </p>
            <p tabIndex="0">Du vill träffas: {where} </p>
            
       </div>
       </div>
       </div>

    
    )
}

export default Overview;


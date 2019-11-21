import React from 'react';

export const Summary = (props) => {

    return <div className="SummaryStyle">
        <p style={{ color: props.colour }}>Welcome {props.name}san! <br></br>You're now a part of the Turtle Ninja crew!
        </p>
        <p style={{ color: props.colour }}>Your ninja colour: {props.colour}</p>
        <p style={{ color: props.colour }}>Your ninja weapon: {props.weapon}</p>
    </div>
};
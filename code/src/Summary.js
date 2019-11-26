import React from 'react';

export const Summary = (props) => {
    return <div className="summaryStyle">
        <p>Thank you! We will get in contact with you as soon as possible. Hope you will love your new bestfriend always!
        </p>
        <p>Your cats gender {props.gender}</p>
        <p>Your cats color {props.color} </p>
    </div>
}
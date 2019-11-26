import React from 'react'




export const Summary = (props) => {

    return <div className="SummaryStyle">
        <p>Thank you {props.name}<br></br>You're now registered at Technigo
        </p>
        <p>You have found us on:{props.item}</p>
        <p>You have already experience in:{props.skill}language programming</p>
        <p>You will {props.wantsNewsletter} recieving Technigo's newsletter</p>
    </div>
};
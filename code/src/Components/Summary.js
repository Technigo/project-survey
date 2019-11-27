import React from 'react'




export const Summary = (props) => {

    return <div className="SummaryStyle">
        <p>Thank you {props.name}<br></br>You're now registered at Technigo
       </p>
        <p>You have found us on:{props.socialMedia}</p>
        <p>You have already experience in:{props.skills}</p>
        <p>You will {props.wantsNewsletter ? true : `not`} recieving Technigo's newsletter</p>
    </div>
};
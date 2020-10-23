import React from 'react'
import './Summary.css'


export const Summary = (props) => {

    return (
        <section className="totalSummary">

            <p> WOW! You want to travel to {props.location} and stay there for {props.duration}. That's sounds dreamy!
                 We'll send the confirmation to mail: {props.mail}.
                    Reach out to us if there something you want to
                 change or if you have any questions regarding your adventure. Happy travels :)</p>

        </section>

    )


}
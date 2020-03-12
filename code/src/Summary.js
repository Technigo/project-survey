import React from 'react';
import "./index.css";

export const Summary = (props) => {

    return (

        <section className="Summary">
            <p> {props.pizza} its a nice pizza.</p>
            <p>{props.soda} works nice with {props.pizza}</p>
            <p>Oh, {props.sauce} is nice. </p>
        </section>
    )
}
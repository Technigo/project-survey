import React from 'react';
import "./index.css";

export const Summary = (props) => {

    return (
        <section className="Summary">
            <p>Cool, {props.color} is a nice color.</p>
            <p>{props.food} and {props.soda} is really nice togheter</p>
        </section>
    )
}
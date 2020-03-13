import React from 'react';
import "./index.css";

export const Summary = (props) => {

    return (

        <section className="Summary">
            <p> {props.pizza} tastes best with {props.soda} and {props.sauce}sauce.</p>
        </section>
    )
}
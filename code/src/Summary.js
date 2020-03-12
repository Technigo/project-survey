import React from 'react';


export const Summary = (props) => {

    return (
        <section className="Summary">
            <p>Cool, {props.color} is a nice color.</p>
            <p>{props.food} is sooo good</p>
        </section>
    )
}
import React from 'react';

const Summary = (props) => {
    return (
        <section>
            <h1>Hey {props.name}! {props.place}, Great choice! Wish you a nice trip with your {props.partner}</h1>
        </section>
    )
}

export default Summary;
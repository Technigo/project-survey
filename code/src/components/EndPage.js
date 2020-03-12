import React from 'react'

export const EndPage = (props) => {

    return (
        <section>
            <h1>Goodbye</h1>
    <p>{props.name}</p>
    <p>{props.age}</p>
    <p>{props.city}</p>
        </section>
    )
}
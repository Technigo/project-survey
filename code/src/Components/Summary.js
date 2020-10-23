import React from 'react';

const Summary = (props) => {
    return (
        <section className="summary">
            <h1
                className="header"
                tabIndex="0">Hey {props.name}
            </h1> 
            <h2 tabIndex="0">{props.place}, what a great choice for your next destination!</h2>
            <div className="summary-info">
                <p tabIndex="0"><span className="bold">Name:</span>{props.name}</p>
                <p tabIndex="0"><span className="bold">Destination:</span>{props.place}</p>
                <p tabIndex="0"><span className="bold">Travel partner:</span>{props.partner}</p>
            </div> 
        </section>
    )
}

export default Summary;
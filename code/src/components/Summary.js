import React from 'react';


const Summary = (props) => {
    return (
        <div className="summary-container">
            <section className="summary">
                <div className="summary-header-container">
                    <h2>Hi {props.name}!</h2>
                </div>
                <p>The latest book you read was: {props.bookname}</p>
                <p>Wow! After you had finished {props.bookname}, you felt {props.feeling}!</p>
                <p>This is how many times you have read the book: {props.numberOfBook}</p>
                <p>If someone would ask you if they should read {props.bookname} your answer will be {props.recomendation}!</p>
                <p>Thank you for your time and have a great day!</p>
            </section>
        </div>

    )
}

export default Summary;
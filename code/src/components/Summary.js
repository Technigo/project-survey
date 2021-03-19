import React from 'react';

const Summary = (props) => {
    return (
        <div>
            <p>Hello {props.name}!</p>
            <p>The latest book you read was: {props.bookname}</p>
            <p>Wow! After you had finished {props.bookname}, you felt {props.feeling}!</p>
            <p>You have read the book {props.numberOfBook} times!</p>
            <p>If someone would ask you if they should read {props.bookname} your answer will be{props.recomendation}!</p>
        </div>
    )
}

export default Summary;
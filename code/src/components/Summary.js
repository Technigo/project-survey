import React from 'react';

const Summary = (props) => {
    return (
        <div className="summary-container">
            <section className="summary">
                <div className="summary-header-container">
                    <h2 tabIndex="0">Hi {props.name}!</h2>
                </div>
                <p tabIndex="0">The latest book you have read was: {props.bookname}</p>
                <p tabIndex="0">After you had finished {props.bookname}, you felt {props.feeling}!</p>
                <p tabIndex="0">This is how many times you have read the book: {props.numberOfBook}</p>
                <p tabIndex="0">If someone would ask you if they should read {props.bookname}, your answer will be: {props.recommendation}!</p>
                <p tabIndex="0">Thank you for your time and have a great day!</p>
                <p>Photo by <a href="https://unsplash.com/@chrislawton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Lawton</a> on <a href="/s/photos/books?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </p>
            </section>
        </div>
    );
};

export default Summary;


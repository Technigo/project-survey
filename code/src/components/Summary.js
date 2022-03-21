import React from "react"

const Summary = (props) => {
    const { member, ageGroup, book } = props
    return (
        <div className="main-card">
            <div className="thank-you-card-wrapper">
                <p className="thank-you-card">  Thank you for recommending <span className="bold-italic">{book.title}</span>  by <span className="bold-italic">{book.author} </span> for our next book discussion session.</p>
                <p className="thank-you-card"> We hope you can join us!</p>
                <div className="summary">
                    <h2>Summary</h2>
                    <p> Member : {member}</p>
                    <p> Age group : {ageGroup}</p>
                    <p> Book title: {book.title}</p>
                    <p> Author : {book.author}</p>
                    <p> ISBN : {book.isbn}</p>
                </div>
            </div>
        </div>
    )

}

export default Summary
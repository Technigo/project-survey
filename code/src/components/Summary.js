import React from "react"

const Summary = (props) => {
    const { member, ageGroup, title, author, isbn } = props
    return (
        <div className="main-card">
            <div className="thank-you-card-wrapper">
                <p className="thank-you-card">  Thank you for recommending <span className="bold-italic">{title}</span>  by <span className="bold-italic">{author} </span> for our next book discussion session.</p>
                <p className="thank-you-card"> We hope you can join us!</p>
                <div className="summary">
                    <h2>Summary</h2>
                    <p> Member : {member}</p>
                    <p> Age group : {ageGroup}</p>
                    <p> Book title: {title}</p>
                    <p> Author : {author}</p>
                    <p> ISBN : {isbn}</p>
                </div>
            </div>
        </div>
    )

}

export default Summary
import React from "react"

const Summary = (props) => {
    const {title, author} = props
    return (
        <p className="summary">
            
            Thank you for recommending {title} by {author} for our next book discussion session.
            We hope you can join us!
        </p>
    )
}

export default Summary
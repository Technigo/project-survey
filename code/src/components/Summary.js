import React from "react"

const Summary = ({
    member, 
    ageGroup, 
    title, 
    author, 
    isbn}) => {

    return (
        <p className="summary">
            Member: {member}
            Age group: {ageGroup}
            Thank you for recommending {title} by {author}, ISBN: {isbn}, for our next book discussion session.
            We hope you can join us!
        </p>
    )
}

export default Summary
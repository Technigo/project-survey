import React from "react"

const numberRanges = [
    "0-6",
    "7-12",
    "13-18",
    "19-24",
    ">24"
]

export const Number = ({ userNumber, onNumberOfBooksChange }) => {
    return (
        <>
            <section className="question">
                <fieldset>
                    <legend>How many books do you read per year?</legend>
                        {numberRanges.map((range) => (
                            <label key={range}>
                                <input
                                    type="radio"
                                    value={range}
                                    onChange={event => onNumberOfBooksChange(event.target.value)}
                                    checked={userNumber === range}
                                />
                                {range}
                            </label>
                        ))}
                </fieldset>
            </section>    
        </>
    )
}


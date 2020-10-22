import React from "react"

const numberRanges = [
    "0-5",
    "6-10",
    "10-15",
    "16-20",
    ">20"
]

export const Number = ({ userNumber, onNumberOfBooksChange }) => {
    return (
        <>
            <section className="question white">
                <fieldset>
                    <legend>How many books do you get through per year?</legend>
                        <section className="numbers">
                            {numberRanges.map((range) => (
                                <label key={range} className="number-label">
                                    <input
                                        type="radio"
                                        value={range}
                                        onChange={event => onNumberOfBooksChange(event.target.value)}
                                        checked={userNumber === range}
                                    />
                                    {range}
                                </label>
                            ))}
                        </section>    
                </fieldset>
            </section>    
        </>
    )
}


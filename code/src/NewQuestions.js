import React, { useState } from "react"

const numberRanges = [
            "0-6",
            "7-12",
            "13-18",
            "19-24",
            ">24"
        ]

const consumptionOptions = [
            "reading the printed book",
            "reading the e-book",
            "listening to the audio book"
        ]


export const NewQuestions = () => {
    const [ consumption, setConsumption ] = useState("");
    const [ numberOfBooks, setNumberOfBooks ] = useState("");
    const [ favouriteAuthor, setFavouriteAuthor ] = useState("");

    return (
        <>
            <section>
                <form>
                    <label>
                        "How do you prefer to consume a book?"
                        <select
                            onChange={event => setConsumption(event.target.value)}
                            value={consumption}
                            >
                            <option value="">Select...</option>
                            {consumptionOptions.map((option) => (
                                <option value={option}>{option}</option>
                            ))}
                        </select>
                    </label>
                    <h2> "How many books do you read per year?"</h2>
                    {numberRanges.map((range) => (
                        <label key={range}>
                            <input
                                type="radio"
                                value={range}
                                onChange={event => setNumberOfBooks(event.target.value)}
                                checked={numberOfBooks === range}
                            />
                            {range}
                        </label>
                    ))}
                    <label>
                        "Who is your favourite author?"
                        <input
                            type="text"
                            onChange={event => setFavouriteAuthor(event.target.value)}
                            value={favouriteAuthor}
                        />
                    </label>
                </form>
            </section>
        </>
    )
}
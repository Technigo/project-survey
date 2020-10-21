import React, { useState } from "react"

import { Consumption } from "./Consumption"
import { Number } from "./Number"
import { Author } from "./Author"
import { Summary } from "./Summary"




export const Form = () => {
    const [ consumption, setConsumption ] = useState("");
    const [ numberOfBooks, setNumberOfBooks ] = useState("");
    const [ favouriteAuthor, setFavouriteAuthor ] = useState("");
    const [ showSummary, setShowSummary ] = useState(false);

    const handleConsumptionChange = newConsumption => {
        setConsumption(newConsumption)
    }

    const handleNumberOfBooksChange = newNumber => {
        setNumberOfBooks(newNumber)
    }

    const handleFavouriteAuthorChange = newAuthor => {
        setFavouriteAuthor(newAuthor)
    }

    const handleSubmit = event => {
        event.preventDefault();
        setShowSummary(true)
    }

    const handleRestart = () => {
        setShowSummary(false);
        setConsumption("");
        setNumberOfBooks("");
        setFavouriteAuthor("")

    }

    console.log(favouriteAuthor)

    return (
        <>
            <div className="main-content">
                {showSummary ? (
                    <Summary 
                        consumption={consumption}
                        numberOfBooks={numberOfBooks}
                        favouriteAuthor={favouriteAuthor}
                        onRestart={handleRestart}
                    />
                ) : (
                <form onSubmit={handleSubmit}> 
                    <Consumption 
                        favConsumption={consumption}
                        onConsumptionChange={handleConsumptionChange}    
                    />
                    <Number
                        userNumber={numberOfBooks}
                        onNumberOfBooksChange={handleNumberOfBooksChange}
                    />
                    <Author
                        favAuthor={favouriteAuthor}
                        onFavouriteAuthorChange={handleFavouriteAuthorChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                )}
            </div>
        </>
    )
}
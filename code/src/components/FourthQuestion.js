import React from "react";

// what do you not like about Autumn? radio buttons

const FourthQuestion = ({ radioInput, onRadioInputChange, onStepChange, onMinusStepChange }) => {
    const notLike = ["Everything", "Winter is coming", "The weather", "Nothing, I love the Autumn!"];

    return (
        <form>
            <p> What do you not like about the Autumn? </p>
            {notLike.map((selection) => (
                <label key={selection}>
                    <input
                    type="radio"
                    value={selection}
                    onChange={(event) => onRadioInputChange(event.target.value)}
                    checked={radioInput === selection}
                    />
                    {selection}
                </label>
            )
                
            )}



            <div className="button-box">
                <button type="submit" 
                className="button"
                onClick={onStepChange}>
                    Next question
                </button>
                
                <button 
                className="button"
                onClick={onMinusStepChange}>Previous question</button>
            </div>
        </form>
    )
}

export default FourthQuestion;
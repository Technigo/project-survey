import React from "react";

// what do you not like about Autumn? radio buttons

const FourthQuestion = ({ radioInput, onRadioInputChange, onStepChange }) => {
    const notLike = ["Everything", "Winter is coming", "The weather", "Nothing, I love the Autumn!"];

    return (
        <form>
            <p> What do you not like about the Autumn? </p>
                {notLike.map((selection) => (
                    <label key={selection}>
                    <input
                      type="radio"
                      value={selection}
                      onChange={onRadioInputChange}
                      checked={radioInput === selection}
                    />
                    {selection}
                  </label>
                )
                
                )}




            <button onClick={onStepChange}>Next question</button>
        </form>
    )
}

export default FourthQuestion;
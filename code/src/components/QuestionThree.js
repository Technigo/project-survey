import React from 'react'

const QuestionThree = ({selectValue, onSelectOptionChange, onStepChange}) => {
    const options = [
        {
            label: "Let's pick one",
            value: "lets pick one",
          },
        {
            label: "Portugal",
            value: "portugal",
          },
          {
            label: "Spain",
            value: "spain",
          },
          {
            label: "Banana",
            value: "banana",
          },
          {
            label: "Pineapple",
            value: "pineapple",
          },
        ];

    return (
    <div>
        <h2>That´s what we thought!</h2>
        <p>This is the body text for the question three.</p>
        <form className="form">
            <label htmlFor="select">Choose one option</label>
                <select
                    id="select-option" 
                    value={selectValue} 
                    onChange={onSelectOptionChange}
                >
                    {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
           <button onClick={onStepChange} className="btn">Next please! <span role="img" aria-label="handpointer">👉🏽</span></button>
        </form>
    </div>
    )
}


export default QuestionThree
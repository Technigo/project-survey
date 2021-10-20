import React from 'react'

const QuestionThree = ({selectValue, onSelectOptionChange, onStepChange}) => {
    const options = [
        {
            label: "Choose one option",
            value: "Choose one option",
          },
        {
            label: "Beachday in a far away country!",
            value: "Beachday, ofcourse!",
          },
          {
            label: "All day in bed watching Netflix",
            value: "All day in bed watching Netflix",
          },
          {
            label: "As long as I'm with friends. WHATEVER!",
            value: "Friends forever!",
          },
          {
            label: "Sleeping. I am SO tired.",
            value: "I am so sleepy...Let´s sleep!",
          },
          {
            label: "Just give me a good book!",
            value: "Just give me a good book!",
          },
        ];

    return (
    <section className="section">
        <div className="intro-text">
          <h2>That is a good choice!</h2>
          <p>What would constitute a “perfect” day for you?</p>
        </div>
        <form className="form">
            <label htmlFor="select">Oh, perfect day...</label>
            <select
                id="select-option" 
                value={selectValue} 
                onChange={onSelectOptionChange}
            >
                {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            <div className="buttons">
                <button onClick={onStepChange} className="btn">Next please! <span role="img" aria-label="handpointer">👉🏽</span></button>
            </div>
        </form>
    </section>
    )
}


export default QuestionThree
import React from 'react'

const QuestionFive = ({selectValue, onSelect2OptionChange, onStepChange, onStepBackChange}) => {
    const options = [
        {
            label: "Choose here",
            value: "Choose one option",
          },
        {
            label: "Yes, invisible sounds interesting!",
            value: "You are invisible, and invinsable!",
          },
          {
            label: "Mindreading, is that creapy?",
            value: "A mindreader knows it all. For sure",
          },
          {
            label: "I want to beam myself to whereever I feel like.",
            value: "Beaming, yes. Lets beam to New York! ",
          },
          {
            label: "What if I could fly...",
            value: "Fly me to the moon!",
          },
          {
            label: "Fall asleep really quick.",
            value: "Fall asleep quick must be the best skill ever!",
          },
        ];

    return (
    <section id="three" className="section">
        <div className="intro-text">
          <label>NAMASTE</label>
          <h2>Gratitude is the key to happiness!</h2>
          <p>If you could wake up tomorrow having gained any one quality or ability, what would it be?</p>
        </div>
        <form className="form">
            <label htmlFor="select">I think I want to be invisible, you?</label>
            <select
                id="select-option" 
                value={selectValue} 
                onChange={onSelect2OptionChange}
            >
                {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            <div className="buttons">
              <button onClick={onStepBackChange} href="#two" className="btn"> <span role="img" aria-label="handpointer">👈🏽</span> Go back!</button>
              <button onClick={onStepChange} href="#two" className="btn">Next please! <span role="img" aria-label="handpointer">👉🏽</span></button>
           </div>
        </form>
    </section>
    )
}


export default QuestionFive
import React from 'react'

const RiddleThree = ({ onStepChange, setRiddleThree, riddleThree }) => {

    const riddleThreeChoices = ['Gravity', 'Time', 'Gas', 'The dark']

    const onRiddleThreeChange = (event) => {
        setRiddleThree(event.target.value)
      }

    return (
        <div className='questions-container'>
            <form className='form'>
              <h1>Third Riddle</h1>
              <p>It cannot be seen, cannot be felt,</p>
              <p>Cannot be heard, cannot be smelt.</p>
              <p>It lies behind stars and under hills,</p>
              <p>And empty holes it fills.</p>
              <p>It comes out first and follows after,</p>
              <p>Ends life, kills laughter.</p>

              <div className='radio-btns'>
                {riddleThreeChoices.map((answer => {
                    return (
                    <label className="radio-label" key={answer}>
                        <input 
                        type='radio'
                        value={answer} 
                        onChange={onRiddleThreeChange} 
                        checked={answer === riddleThree} /> 
                        {answer}
                    </label>
                    )
                    }))}
                </div>

                <button className='next-btn' type='button' onClick={onStepChange}>Next</button>
            </form> 
        </div>
   
    )

 }

 export default RiddleThree;
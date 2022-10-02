import React from 'react'

const RiddleTwo = ({ onStepChange, setRiddleTwo, riddleTwo }) => {

    const riddleTwoChoices = ['A penguin', 'ESlint', 'The wind', 'My stomach after chili night']

    const onRiddleTwoChange = (event) => {
        setRiddleTwo(event.target.value)
      }

    return (
        <div className='questions-container'>
            <form className='form'>
              <h1>Second Riddle</h1>
              <p>Voiceless it cries,</p>
              <p>Wingless flutters,</p>
              <p>Toothless bites,</p>
              <p>Mouthless mutters.</p>

              <div className='radio-btns'>
                {riddleTwoChoices.map((answer => {
                    return (
                    <label className="radio-label" key={answer}>
                        <input 
                        type='radio'
                        value={answer} 
                        onChange={onRiddleTwoChange} 
                        checked={answer === riddleTwo} /> 
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

 export default RiddleTwo;
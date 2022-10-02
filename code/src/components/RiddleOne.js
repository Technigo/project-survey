import React from 'react'

const RiddleOne = ({ onStepChange, setRiddleOne, riddleOne })=> {

    const riddleOneChoices = ['History', 'Mountains', 'The sky', 'Rainbows']

    const onRiddleOneChange = (event) => {
        setRiddleOne(event.target.value)
      }

    return (
        <div className='questions-container'>
            <form className='form'>
              <h1>First Riddle</h1>
              <p>What has roots as nobody sees,</p>
              <p>Is taller than trees,</p>
              <p>Up, up it goes,</p>
              <p>And yet never grows?</p>

              <div className='radio-btns'>
                {riddleOneChoices.map((answer => {
                    return (
                    <label className="radio-label" key={answer}>
                        <input 
                        type='radio'
                        value={answer} 
                        onChange={onRiddleOneChange} 
                        checked={answer === riddleOne} /> 
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

 export default RiddleOne;
import React from 'react'

const RiddleFour = ({ onStepChange, setRiddleFour, riddleFour }) => {

    const riddleFourChoices = ['Fish', 'Ice', 'Vampires', 'A cactus']

    const onRiddleFourChange = (event) => {
        setRiddleFour(event.target.value)
      }

    return (
        <div className='questions-container'>
            <form className='form'>
              <h1>Fourth Riddle</h1>
              <p>Alive without breath,</p>
              <p>As cold as death;</p>
              <p>Never thirsty, ever drinking,</p>
              <p>All in mail never clinking.</p>

              <div className='radio-btns'>
                {riddleFourChoices.map((answer => {
                    return (
                    <label className="radio-label" key={answer}>
                        <input 
                        type='radio'
                        value={answer} 
                        onChange={onRiddleFourChange} 
                        checked={answer === riddleFour} /> 
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

 export default RiddleFour;
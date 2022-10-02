import React from 'react'

const RiddleFive = ({ onStepChange, onRiddleFiveChange, riddleFive }) => {
    return (
        <div className='questions-container'>
            <form className='form' onSubmit={event => event.preventDefault()}>
                <h1>Fifth Riddle</h1>
                <p>This thing all things devours;</p>
                <p>Birds, beasts, trees, flowers;</p>
                <p>Gnaws iron, bites steel;</p>
                <p>Grinds hard stones to meal;</p>
                <p>Slays king, ruins town,</p>
                <p>And beats mountain down.</p>

                  <div className='input-container'>
                  <label className='select-label'>
                      <select onChange={onRiddleFiveChange} value={riddleFive} className='select'>
                          <option value='Time'>Time</option>
                          <option value='Chuck Norris'>Chuck Norris</option>
                          <option value='Industry'>Industry</option>
                          <option value='Water'>Water</option>
                      </select>
                      </label>
                    <button className='next-btn' type='button' onClick={onStepChange}>Next</button>
                  </div>
            </form>
        </div>
    )

}

 export default RiddleFive;
import React from 'react'

const SixthQuestion = ({ sliderInput, onSliderInputChange, onStepChange, onStepChangeBack }) => {
    return (
        <form>
            How much do you slide?
            <input type="range" min="0" max="100" value={sliderInput} onChange={onSliderInputChange}/>
            <p>{sliderInput}%</p>
            <button disabled={sliderInput === ''} onClick={onStepChange}>Submit</button>
            <button onClick={onStepChangeBack}>Previous Question</button>
        </form>
    )
}

export default SixthQuestion
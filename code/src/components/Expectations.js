import React from 'react'

const Expectations = ({ expectations, setExpectations, nextSlide, backSlide }) => {
  const feedbackValues = ['Superduper', 'Great', 'Standard', 'Horrible']

    return (
      <div>
        <h2>How did you find the stay</h2>
        {feedbackValues.map(feedback => (
        <label key={feedback} htmlFor='feedback'>
        <input
          id='feedback'
          type='radio'
          value={feedback}
          onChange={(event) => {setExpectations(event.target.value)}}
          checked={expectations === feedback}
        />
        {feedback}
        </label>
        ))}
        <div>
          <button className='button' onClick={backSlide}>
            Back
          </button>
          <button className='button' onClick={nextSlide}>
            Next
          </button>
        </div>
      </div>
    )
}

    export default Expectations

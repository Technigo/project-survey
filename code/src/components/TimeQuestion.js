import React from 'react'

const TimeQuestion = ({
	time,
	onTimeChange,
	onStepChange,
}) => {
	return (
		<form className='form'>
			<label>
        How long you want your cardio exersice takes?
        <select id="time" value={time} onChange={onTimeChange}>
          <option>
            Select time
          </option>
          <option value="10">10 minutes</option>
          <option value="15">15 minutes</option>
          <option value="20">20 minutes</option>
        </select>
      </label>
			<button onClick={onStepChange}
      className='button'>Next question</button>
		</form>
	)
}

export default TimeQuestion
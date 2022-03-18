import React from 'react'

const LowerBodyQuestion = ({
	lowerBody,
	onLowerBodyChange,
	onStepChange,
}) => {
	return (
		<form className='form'>
			<label>
        What you want to do for train your lower body? You can choose option depends what you can use for training
        <select id="lowerBody" value={lowerBody} onChange={onLowerBodyChange}>
          <option>
            Select
          </option>
          <option value="Squat">Squat</option>
          <option value="Deadlift">Deadlift</option>
          <option value="Burpee">Burpee</option>
          <option value="Pistol squat">Pistol squat</option>
        </select>
      </label>
			<button onClick={onStepChange}
      className="button">Next question</button>
		</form>
	)
}

export default LowerBodyQuestion
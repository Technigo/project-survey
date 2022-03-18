import React from 'react'

const UpperBodyQuestion = ({
	upperBody,
	onUpperBodyChange,
	onStepChange,
}) => {
	return (
		<form className='form'>
			<label>
        What you want to do for train your upper body? You can choose option depends what you can use for training
        <select id="upperBody" value={upperBody} onChange={onUpperBodyChange}>
          <option>
            Select
          </option>
          <option value="Pull up">Pull up</option>
          <option value="Push-up">Push-up</option>
          <option value="Military press">Military press</option>
        </select>
      </label>
			      <button 
            onClick={onStepChange}
            className='button'>Next question</button>
		</form>
	)
}

export default UpperBodyQuestion
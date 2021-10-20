import React from 'react'

const SecondQuestion = ({activity, onActivityInputChange, onStepChange}) => {
  return (
    <form>
      <label>
        Which of the following volunteer activities most interests you?
        <select value={activity} onChange={event => onActivityInputChange(event.target.value)}>
          <option value="tutoring">Tutoring</option>
					<option value="daycare">Daycare</option>
					<option value="fundraising">Fundraising</option>
					<option value="administration">Administration</option>
        </select>
      </label>
      <button onClick={onStepChange}>Submit</button>
     </form>
  )
}

export default SecondQuestion;
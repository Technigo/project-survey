import React from 'react'

const SecondQuestion = ({
  activity, 
  onActivityInputChange, 
  onStepChange
}) => {
  return (
    <form>
      <label>
        2 -&gt; Which of the following volunteer activities most interests you?
        <select value={activity} onChange={event => onActivityInputChange(event.target.value)}>
          <option value="Tutoring">Tutoring</option>
					<option value="Daycare">Daycare</option>
					<option value="Fundraising">Fundraising</option>
					<option value="Administration">Administration</option>
        </select>
      </label>
      <button onClick={onStepChange}>Continue</button>
     </form>
  )
}

export default SecondQuestion;
import React from 'react';

const TimeQuestion = ({
	time,
	onTimeChange,
	onStepChange,
}) => {
	return (
		<form>
			<label>
        How long you want your cardio exersice takes?
        <select id="time" value={time} onChange={onTimeChange}>
          <option value="" disabled selected>
            Select time
          </option>
          <option value="10">10 minutes</option>
          <option value="15">15 minutes</option>
          <option value="20">20 minutes</option>
        </select>
      </label>
			<button onClick={onStepChange}>Next question</button>
		</form>
	);
};

export default TimeQuestion;
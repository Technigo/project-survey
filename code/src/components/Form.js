import React, { useState } from 'react'

import FirstQuestion from './FirstQuestion'
import TimeQuestion from './TimeQuestion'
import UpperBodyQuestion from './UpperBodyQuestion'
import LowerBodyQuestion from './LowerBodyQuestion'
import Overview from './Overview'

const Form = () => {
	const [nameInput, setNameInput] = useState('')
	const [time, setTime] = useState('')
    const [upperBody, setUpperBody] =useState('')
    const [lowerBody, setLowerBody] =useState('')
	const [step, setStep] = useState(1);

	const onNameInputChange = (event) => {
		setNameInput(event.target.value);
	}

	const onTimeChange = (event) => {
		setTime(event.target.value)
	}

    const onUpperBodyChange = (event) => {
		setUpperBody(event.target.value)
	}

    const onLowerBodyChange = (event) => {
		setLowerBody(event.target.value)
	}

	const onStepChange = () => {
		setStep(step + 1)
	}

	return (
		<div>
			{step === 1 && (
				<FirstQuestion
					nameInput={nameInput}
					onNameInputChange={onNameInputChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 2 && (
				<TimeQuestion
					time={time}
					onTimeChange={onTimeChange}
					onStepChange={onStepChange}
				/>
			)}
            {step === 3 && (
				<UpperBodyQuestion
                    upperBody={upperBody}
					onUpperBodyChange={onUpperBodyChange}
					onStepChange={onStepChange}
				/>
			)}
             {step === 4 && (
				<LowerBodyQuestion
                    lowerBody={lowerBody}
					onLowerBodyChange={onLowerBodyChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 5 && (
				<Overview nameInput={nameInput} time={time} upperBody={upperBody} lowerBody={lowerBody} />
			)}
		</div>
	)
}

export default Form
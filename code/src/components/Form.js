import React, { useState } from 'react'

import FirstQuestion from './FirstQuestion'
import RandomCardioQuestion from './RandomCardioQuestion'
import TimeQuestion from './TimeQuestion'
import UpperBodyQuestion from './UpperBodyQuestion'
import LowerBodyQuestion from './LowerBodyQuestion'
import CardioTypeQuestion from './CardioTypeQuestion'
import OverviewForRandom from './OverviewForRandom'
import Overview from './Overview'

const Form = () => {
	const [nameInput, setNameInput] = useState('')
	const [random, setRandom] = useState('')
	const [time, setTime] = useState('')
    const [upperBody, setUpperBody] =useState('')
    const [lowerBody, setLowerBody] =useState('')
	const [cardioTypes, setCardioTypes] =useState('')
	const [step, setStep] = useState(1)

	const onNameInputChange = (event) => {
		setNameInput(event.target.value)
	}

	const onRandomChange = (random) => {
		setRandom(random)
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

	const onCardioTypeChange = (event) => {
		setCardioTypes(event.target.value)
	}

	const goPrograms = () => {
		setStep(8)
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
            <RandomCardioQuestion
              random={random}
              onRandomChange={onRandomChange}
              onStepChange={onStepChange}
			  goPrograms={goPrograms}
            />
          )}
			{step === 3 && (
				<TimeQuestion
					time={time}
					onTimeChange={onTimeChange}
					onStepChange={onStepChange}
				/>
			)}
            {step === 4 && (
				<UpperBodyQuestion
                    upperBody={upperBody}
					onUpperBodyChange={onUpperBodyChange}
					onStepChange={onStepChange}
				/>
			)}
             {step === 5 && (
				<LowerBodyQuestion
                    lowerBody={lowerBody}
					onLowerBodyChange={onLowerBodyChange}
					onStepChange={onStepChange}
				/>
			)}
			 {step === 6 && (
				<CardioTypeQuestion
                    cardioTypes={cardioTypes}
					onCardioTypeChange={onCardioTypeChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 7 && (
				<Overview nameInput={nameInput} time={time} upperBody={upperBody} lowerBody={lowerBody} cardioTypes={cardioTypes} random={random} />
			)}
			{step === 8 && (
				<OverviewForRandom />
			)}
		</div>
	)
}

export default Form
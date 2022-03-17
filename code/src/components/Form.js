import React, {useState} from 'react'

import questions from '../questions.json'
import { Select } from 'components/Select'
// import { Select } from './Select'


export const Form = () => {
	const [page, setPage] = useState(0);
	const [userName, setUserName] = useState('');
	const [breakupPerson, setBreakupPerson] = useState('');
	const [shipDuration, setShipDuration] = useState('default');
	const [jobTitle, setJobTitle] = useState('');
	const [jobDuration, setJobDuration] = useState('');
	const [currentlyEmployed, setCurrentlyEmployed] = useState(false)
	const [traitsCheckboxes, setTraitsCheckboxes] = useState([])

  	// prevents page from reload when form is submitted
	const onSubmitting = (e) => {
		e.preventDefault();
	};


	const nextPage = () => setPage(page + 1);
	const backPage = () => setPage(page - 1);
	const breakUpper = () => {
		if (breakupPerson === "I broke up with you.") {
			return ["you", "me"]
		}
		return ["I", "you"]
	}

	const handleShipDuration = (event) => {
		setShipDuration(event.target.value)
	}

	const onTraitsCheckboxesChange = (trait) => {
		if (traitsCheckboxes.includes(trait)) {
			const filteredTraits = traitsCheckboxes.filter(item => item !== trait)
			setTraitsCheckboxes(filteredTraits)
		} else {
			setTraitsCheckboxes([...traitsCheckboxes, trait])
		}
	}

	return (
		<form onSubmit={onSubmitting}>
			<div className='form-main-content-container'>

				{page === 0 && (
					<div className='text-input-container'>
						<label htmlFor='nameQuestion'>
							{questions.nameQuestion}
						</label>
						<input
							id='nameQuestion'
							type='text'
							onChange={event => setUserName(event.target.value)}
							value={userName}
						/>
						<div>
							<button  onClick={nextPage}>Next question</button>
						</div>
					</div>
				)}
				{page === 1 && (
					<div className='select-container question'>
						<Select 
							shipDuration = {shipDuration}
							setShipDuration = {handleShipDuration}
							durationQuestion = {questions.durationQuestion}
							duration = {questions.duration}	
						/>
						<div>
							<button  onClick={backPage}>Previous question</button>
							<button  onClick={nextPage}>Next question</button>
						</div>
					</div>
				)}
				
				{page === 2 && (
					<div className='radio-container'>
						{questions.breakupQuestion}
						{questions.breakupAlts.map((alt) =>
							<div>
								<label className='radio-button' htmlFor={alt}>
									{alt}
								
								<input
									id={alt}
									type='radio'
									value={alt}
									onChange={event => setBreakupPerson(event.target.value)}
									checked={breakupPerson === alt}
								/>
								</label>
							</div>
						)}
						<div>
							<button  onClick={backPage}>Previous question</button>
							<button  onClick={nextPage}>Next question</button>
						</div>
					</div>
				)}

				{page === 3 && (
					
						<div className='text-input-container'>
							<label htmlFor='nameQuestion'>
								Why did {breakUpper()[0]} break up with {breakUpper()[1]}?
							</label>
							<input
								id='nameQuestion'
								type='text'
								onChange={event => setUserName(event.target.value)}
								value={userName}
							/>
							<div>
								<button  onClick={backPage}>Previous question</button>
								<button  onClick={nextPage}>Next question</button>
							</div>
						</div>
				)}
				{page === 4 && (
					<div className='question'>
						{questions.traitsQuestion}
						{questions.traits.map((trait, index) => 
							<label className='trait'>
								{trait}
								{console.log(trait)}
								<input
									type='checkbox'
									checked={traitsCheckboxes.includes(trait)}
									onChange={() => onTraitsCheckboxesChange(trait)}
								/>
							</label>
						)}
						<div>
							<button  onClick={backPage}>Previous question</button>
							<button  onClick={nextPage}>Next question</button>
						</div>
					</div>
				)}
				{page === 5 && (
					<div className='question'>
						<label>
							I am currently employed/self employed
							<input
								type='checkbox'
								checked={currentlyEmployed}
								onChange={event => setCurrentlyEmployed(event.target.checked)}
							/>
						</label>

						{currentlyEmployed && (
							<div className='text-input-container'>
								<label htmlFor='jobtitle'>
									{questions.jobTitle}
								</label>
								<input
									id='jobtitle'
									type='text'
									onChange={event => setJobTitle(event.target.value)}
									value={jobTitle}
								/>
							</div>
						)}

						{jobTitle && (
							<div className='text-input-container'>
								<label htmlFor='jobduration'>
									{questions.jobDuration}
								</label>
								<input
									id='jobduration'
									type='text'
									onChange={event => setJobDuration(event.target.value)}
									value={jobDuration}
								/>
							</div>
						)}
						<div>
							<button  onClick={backPage}>Previous question</button>
							<button  onClick={nextPage}>Next question</button>
						</div>
					</div>
				)}
			</div>
			{page === 6 && (
				<button>Submit</button>
			)}
		</form>
	)
}




// <div className='question'>
// 						<label>
// 							Were You Comfortable Talking To Your Manager?
// 							<input
// 								type='checkbox'
// 								checked={talkToManager}
// 								onChange={event => setTalkToManager(event.target.checked)}
// 							/>
// 						</label>

// 						{talkToManager && (
// 							<div className='radio-container'>
// 								City:
// 								{questions.city.map((c) =>
// 									<div>
// 										<label className='radio-button' htmlFor={c}>
// 											{c}
										
// 										<input
// 											id={c}
// 											type='radio'
// 											value={c}
// 											onChange={event => setCity(event.target.value)}
// 											checked={city === c}
// 										/>
// 										</label>
// 									</div>
// 								)}
// 							</div>
// 						)}
// 						<div>
// 							<button  onClick={backPage}>Previous question</button>
// 							<button  onClick={nextPage}>Next question</button>
// 						</div>
// 					</div>
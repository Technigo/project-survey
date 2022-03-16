import React, {useState} from 'react'

import questions from '../questions.json'
import { Select } from 'components/Select'
// import { Select } from './Select'


export const Form = (props) => {
	const [ageValue, setAgeValue] = useState('default');
	const [city, setCity] = useState('');
	const [jobTitle, setJobTitle] = useState('');
	const [jobDuration, setJobDuration] = useState('');
	const [worksInSweden, setWorksInSweden] = useState(false)
	const [currentlyEmployed, setCurrentlyEmployed] = useState(false)

  // prevents page from reload when form is submitted
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(worksInSweden);
		console.log(city);
		console.log(currentlyEmployed);
		console.log(jobTitle);
	};

	const handleAgeValue = (event) => {
		console.log(ageValue, "before setagevalue");
		setAgeValue(event.target.value)
		console.log(event.target.value, "event target value")
		console.log(ageValue, "after setagevalue");
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='form-main-content-container'>
				<div className='select-container question'>
					<Select 
						ageValue = {ageValue}
						setAgeValue = {handleAgeValue}
						questions = {questions}	
					/>
				</div>

				<div className='question'>
					<label>
						I work in Sweden
						<input
							type='checkbox'
							checked={worksInSweden}
							onChange={event => setWorksInSweden(event.target.checked)}
						/>
					</label>

					{worksInSweden && (
						<div className='radio-container'>
							City:
							{questions.city.map((c) =>
								<div>
									<label className='radio-button' htmlFor={c}>
										{c}
									
									<input
										id={c}
										type='radio'
										value={c}
										onChange={event => setCity(event.target.value)}
										checked={city === c}
									/>
									</label>
								</div>
							)}
						</div>
					)}
				</div>

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
				</div>
				
			</div>
			<button>Submit</button>
		</form>
	)
}
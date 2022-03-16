import React, {useState} from 'react'

import questions from '../questions.json'
import { Select } from 'components/Select'
// import { Select } from './Select'


export const Form = (props) => {
	const [ageValue, setAgeValue] = useState('default');
	const [city, setCity] = useState('');
	const [jobTitle, setJobTitle] = useState('');
	const [worksInSweden, setWorksInSweden] = useState(false)
	const [currentlyEmployed, setCurrentlyEmployed] = useState(false)

  // prevents page from reload when form is submitted
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(ageValue);
		console.log(worksInSweden);
		console.log(city);
		console.log(currentlyEmployed);
		console.log(jobTitle);
	};

	return (
		<form onSubmit={handleSubmit}>

			<div className='select-container'>
				<Select 
					ageValue = {ageValue}
					setAgeValue = {setAgeValue}
					questions = {questions}	
				/>
			</div>

			<div>
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
							<label>
								<input
									type='radio'
									value={c}
									onChange={event => setCity(event.target.value)}
									checked={city === c}
								/>
								{c}
							</label>
						)}
					</div>
				)}
			</div>

			<div>
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
			</div>
			
			
			<button>Submit</button>
		</form>
	)
}
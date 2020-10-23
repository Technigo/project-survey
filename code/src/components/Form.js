import React, { useState } from 'react';
import { InputSelect } from './InputSelect';
import { InputText } from './InputText';
import { InputRadio } from './InputRadio';
import { InputCheckbox } from './InputCheckbox';
import { InputRange } from './InputRange';
import { InputEmail } from './InputEmail';
import { Button } from './Button';
import { Summary } from './Summary';
import { ProgressBar } from './ProgressBar';
import '../Styles/Form.css';

export const Form = () => {
	const [question, setQuestion] = useState(-1); //show first "question"
	const [name, setName] = useState(''); //text
	const [age, setAge] = useState(false); //radio
	const [months, setMonths] = useState([]); //checkbox
	const [season, setSeason] = useState(''); //drop-down
	const [value, setValue] = useState(5); //range
	const [email, setEmail] = useState(''); //email
	const [submit, setSubmit] = useState(false); //since we don't want to show result before submitted.

	const nextQuestion = () => setQuestion(question + 1); //to get next question in line (add +1 later)
	const previousQuestion = () => setQuestion(question - 1);

	const handleSubmit = event => {
		event.preventDefault();
		setSubmit(true); //show summary on submit
		//console.log('form submitted');
	};

	const handleMonthsChange = monthValue => {
		months.includes(monthValue)
			? setMonths(months.filter(item => item !== monthValue))
			: setMonths([...months, monthValue]);
	};

	//array for radio btn
	const ageGroups = [
		'0-18 years',
		'19-30 years',
		'31-40 years',
		'41-50 years',
		'51-60 years',
		'60 + years',
	];

	//array for checkbox
	const seasonArray = [
		{
			season: 'Winter',
			months: ['December', 'January', 'February'],
		},
		{
			season: 'Spring',
			months: ['March', 'April', 'May'],
		},
		{
			season: 'Summer',
			months: ['June', 'July', 'August'],
		},
		{
			season: 'Fall',
			months: ['September', 'October', 'November'],
		},
	];
	// console.log(seasonArray);
	// console.log(seasonArray.findIndex(item => item.season === season));
	// console.log(
	// 	seasonArray[seasonArray.findIndex(item => item.season === 'Summer')].months
	// );

	return (
		<section className="form-wrapper">
			{question === -1 && (
				<section className="introduction">
					<h2>Welcome, please take a few minutes to answer this survey!</h2>
					<div className="navigation-start">
						<Button button="button" click={nextQuestion} text="Start survey" />
					</div>
				</section>
			)}

			{!submit ? (
				<form onSubmit={handleSubmit}>
					{question === 0 && (
						<section className="question-container">
							<InputText
								question="What is your name?"
								value={name}
								setName={setName}
							/>
							<div className="navigation">
								<Button button="button" click={previousQuestion} text="Back" />
								<Button
									button="button"
									disabled={!name}
									click={nextQuestion}
									text="Next"
								/>
							</div>
						</section>
					)}

					{question === 1 && (
						<section className="question-container">
							{/* {console.log(season)} */}
							<InputSelect
								question="What's your favourit season?"
								setSeason={setSeason}
								value={season}
							/>
							<div className="navigation">
								<Button button="button" click={previousQuestion} text="Back" />
								<Button
									button="button"
									disabled={!season}
									click={nextQuestion}
									text="Next"
								/>
							</div>
						</section>
					)}
					{/* //rendering question depending on favourite season selected */}
					{question === 2 && (
						<section className="question-container">
							<InputCheckbox
								question="Select which months you prefer"
								selectedMonths={months}
								onMonthsChange={handleMonthsChange}
								value={season}
								array={
									seasonArray[
										seasonArray.findIndex(item => item.season === season)
									].months
								}
							/>
							<div className="navigation">
								<Button button="button" click={previousQuestion} text="Back" />
								<Button
									button="button"
									disabled={!season}
									click={nextQuestion}
									text="Next"
								/>
							</div>
						</section>
					)}
					{question === 3 && (
						<section className="question-container">
							<InputRange
								// id="range"
								question={`How much do you like ${season}? (scale1-10)`}
								value={value}
								setValue={setValue}
							/>
							<div className="navigation">
								<Button button="button" click={previousQuestion} text="Back" />
								<Button
									button="button"
									disabled={!value}
									click={nextQuestion}
									text="Next"
								/>
							</div>
						</section>
					)}

					{question === 4 && (
						<section className="question-container">
							<InputRadio
								question={`ah ${season}, how many have you experienced?`}
								array={ageGroups}
								setAge={setAge}
								age={age}
							/>
							<div className="navigation">
								<Button button="button" click={previousQuestion} text="Back" />
								<Button
									button="button"
									disabled={!age}
									click={nextQuestion}
									text="Next"
								/>
							</div>
						</section>
					)}
					{question === 5 && (
						<section className="question-container">
							<Summary
								name={name}
								season={season}
								selected={age}
								value={value}
								email={email}
							/>
							<div className="email-container">
								<InputEmail
									question="Type your email and the summary will be send to you shortly!"
									value={email}
									setEmail={setEmail}
								/>
								<div className="navigation">
									<Button
										button="button"
										click={previousQuestion}
										text="Back"
									/>
									<Button type="submit" disabled={!email} text="Submit" />
								</div>
							</div>
						</section>
					)}

					{question >= 0 && (
						<section className="progress-bar-wrapper">
							<ProgressBar
								progress={`${question}`}
								maxProgress="5"
								minProgress="0"
							/>
						</section>
					)}
				</form>
			) : (
				<section className="reset-wrapper">
					<article className="reset">
						<h4>Thank you!</h4>
						<div className="navigation-reset">
							<Button
								button="button"
								click={() => window.location.reload()}
								text="Reset survey"
							/>
						</div>
					</article>
				</section>
			)}
		</section>
	);
};

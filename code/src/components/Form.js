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
import './Form.css';

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
		console.log('form submitted');
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
	//const monthsArray = ['January', 'February', 'March', 'April'];
	// Karro exempel
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
	console.log(seasonArray);
	console.log(seasonArray.findIndex(item => item.season === 'Spring'));
	console.log(
		seasonArray[seasonArray.findIndex(item => item.season === 'Summer')].months
	);
	// {
	// 	id: 'spring',
	// 	month1: 'March',
	// 	month2: 'April',
	// 	month3: 'May',
	// },
	// {
	// 	id: 'summer',
	// 	month1: 'June',
	// 	month2: 'July',
	// 	month3: 'August',
	// },
	// {
	// 	id: 'fall',
	// 	month1: 'September',
	// 	month2: 'October',
	// 	month3: 'November',
	// },
	// ];

	return (
		<section className="form-wrapper">
			{/* <div className="intro-wrapper"> */}
			{question === -1 && (
				<article className="introduction">
					<h2>Welcome, please take a few minutes to answer this survey!</h2>
					<div className="navigation-start">
						<Button button="button" click={nextQuestion} text="Start survey" />
					</div>
				</article>
			)}
			{/* </div> */}

			{!submit ? (
				<form onSubmit={handleSubmit}>
					{question === 0 && (
						<article className="question-container">
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
						</article>
					)}

					{question === 1 && (
						<article className="question-container">
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
						</article>
					)}
					{question === 2 && season === 'Winter' && (
						<>
							<InputCheckbox
								question="Select which ones you like"
								selectedMonths={months}
								onMonthsChange={handleMonthsChange}
								array={
									seasonArray[
										seasonArray.findIndex(item => item.season === 'Winter')
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
						</>
					)}
					{question === 2 && season === 'Spring' && (
						<>
							<InputCheckbox
								question="Select which ones you like"
								selectedMonths={months}
								onMonthsChange={handleMonthsChange}
								array={
									seasonArray[
										seasonArray.findIndex(item => item.season === 'Spring')
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
						</>
					)}
					{question === 2 && season === 'Summer' && (
						<>
							<InputCheckbox
								question="Select which ones you like"
								selectedMonths={months}
								onMonthsChange={handleMonthsChange}
								array={
									seasonArray[
										seasonArray.findIndex(item => item.season === 'Summer')
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
						</>
					)}
					{question === 2 && season === 'Fall' && (
						<>
							<InputCheckbox
								question="Select which ones you like"
								selectedMonths={months}
								onMonthsChange={handleMonthsChange}
								array={
									seasonArray[
										seasonArray.findIndex(item => item.season === 'Fall')
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
						</>
					)}

					{/* {question === 2 && (
						<article className="question-container">
							<InputCheckbox
								question="Select months"
								selectedMonths={months}
								onMonthsChange={handleMonthsChange}
								array={monthsArray}
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
						</article>
					)} */}

					{question === 3 && (
						<article className="question-container">
							<InputRange
								// id="range"
								question={`From a 1-10 scale how much do you like ${season} ?`}
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
						</article>
					)}

					{question === 4 && (
						<article className="question-container">
							<InputRadio
								question={`How many ${season} have you experienced?`}
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
						</article>
					)}

					{/* {question === 4 && (
						<article className="question-container">
							<InputEmail
								// id="email"
								question="Type your e-mail to recieve a summary of your answers"
								value={email}
								setEmail={setEmail}
							/>
							<div className="navigation">
								<Button button="button" click={previousQuestion} text="Back" />
								<Button
									type="button"
									//type="submit"
									// disabled={email === ''}
									click={nextQuestion}
									text="next"
								/>
							</div>
						</article>
					)} */}
					{question === 5 && (
						<article className="question-container">
							<Summary
								name={name}
								season={season}
								selected={age}
								value={value}
								email={email}
							/>
							<InputEmail
								// id="email"
								question="Type your e-mail to recieve a summary of your answers"
								value={email}
								setEmail={setEmail}
							/>
							<div className="navigation">
								<Button button="button" click={previousQuestion} text="Back" />
								<Button
									type="submit"
									disabled={!email}
									//click={handleSubmit}
									text="Submit"
								/>
							</div>
						</article>
					)}

					{question >= 0 && (
						<section className="progress-bar-wrapper">
							<ProgressBar
								// progress={question}
								progress={`${question}`}
								maxProgress="5"
								minProgress="0"
								// progressText={`${question}/5`}
							/>
						</section>
					)}
				</form>
			) : (
				<>
					{/* {summary === 0 && (
						<article className="question-container">
							<InputEmail
								// id="email"
								question="Type your e-mail to recieve a summary of your answers"
								value={email}
								setEmail={setEmail}
							/>
							<div className="navigation">
								{/* <Button button="button" click={previousQuestion} text="Back" /> */}
					{/* <Button
									//type="button"
									//type="submit"
									// disabled={email === ''}
									click={nextSummary}
									text="Yes"
								/> */}
					{/* <Button
									//type="button"
									type="submit"
									// disabled={email === ''}
									click={nextSummary}
									text="No"
								/>
							</div>
						</article>
					)} */}

					{/* {summary === 1 && ( */}
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
					{/* )} */}
				</>
			)}
		</section>
	);
};

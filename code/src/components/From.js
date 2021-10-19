import React, { useState } from 'react'; //importing hooks
//do this in all components if you want it there.
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import Overview from './Overview';

const Form = () => {
	const [nameInput, setNameInput] = useState(''); //state property storing the name. A default input current empty but can be set
	const [surnameInput, setSurnameInput] = useState(''); //state property storing the surname.
	const [step, setStep] = useState(1); //state property storing the current question.
	const [location, setLocation] = useState('');
	// A custom/separate function that pass the function name
	const onNameInputChange = (event) => {
		setNameInput(event.target.value);
	};

	// A custom/separate function that pass the function surname
	const onSurnameInputChange = (event) => {
		setSurnameInput(event.target.value);
	};

	const onLocationInputChange = (event) => {
		setLocation(event.target.value);
	};

	//A custom/separate function that keep track of the current question
	const onStepChange = () => {
		setStep(step + 1);
	};

	//Option 3 - syntatic sugar
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
				<SecondQuestion
					surnameInput={surnameInput}
					onSurnameInputChange={onSurnameInputChange}
					onStepChange={onStepChange}
				/>
			)}

			{step === 3 && (
				<ThirdQuestion
					location={location}
					onLocationInputChange={onLocationInputChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 4 && (
				<Overview
					nameInput={nameInput}
					surnameInput={surnameInput}
					location={location}
				/>
			)}
		</div>
	);

	//Option 2
	// if (step === 1) {
	// 	return (
	// 		<FirstQuestion
	// 			nameInput={nameInput}
	// 			onNameInputChange={onNameInputChange}
	// 			onStepChange={onStepChange}
	// 		/>
	// 	);
	// } else if (step === 2) {
	// 	return (
	// 		<SecondQuestion
	// 			surnameInput={surnameInput}
	// 			onSurnameInputChange={onSurnameInputChange}
	// 			onStepChange={onStepChange}
	// 		/>
	// 	);
	// } else if (step === 3) {
	// 	return <Overview nameInput={nameInput} surnameInput={surnameInput} />;
	// }

	//Option 3
	// return (
	// 	<div>
	// 		<form>
	// 			<label htmlFor="nameInput">Type your name</label>
	// 			<input
	// 				id="nameInput" //connects to the HTML-form
	// 				type="text"
	// 				value={nameInput} //necessary in order to make the input controlled
	// 				onChange={onNameInputChange} //eventlistner that updates the input. And necessary in order to make the input controlled
	// 			/>

	// 			<label htmlFor="surnameInput">Type your surname</label>
	// 			<input
	// 				id="surnameInput" //connects to the HTML-form
	// 				type="text"
	// 				value={surnameInput} //necessary in order to make the input controlled
	// 				onChange={onSurnameInputChange} //eventlistner that updates the input. And necessary in order to make the input controlled
	// 			/>
	// 		</form>

	// 		{/* a section that displays the users input */}
	// 		<section>
	// 			<h2> Your answers from the quiz: </h2>
	// 			<p>Name: {nameInput} </p>
	// 			<p>Surname:{surnameInput}</p>
	// 			<p> </p>
	// 			<p> </p>
	// 			<p> </p>
	// 		</section>
	// 	</div>

	// <div>
	// 	<div> my Counter is: {counter}</div>
	// 	<button onClick={() => setCounter(counter + 1)}>Click</button>
	// </div>
};

//adding a function the button add onClick={ }
export default Form;

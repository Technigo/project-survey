import React, { useState } from 'react'; //importing hooks
//importing from other components
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourthQuestion from './FourthQuestion';
import FifthQuestion from './FifthQuestion';
import Overview from './Overview';

const Form = () => {
	const [movie, setMovie] = useState('A Nightmare on Elm Street'); //state property storing the movie.
	const [seat, setSeat] = useState('1'); //state property storing the seat.
	const [ticketInput, setTicket] = useState('');
	const [snack, setSnack] = useState('popcorn');
	const [nameInput, setNameInput] = useState('');
	const [step, setStep] = useState(1); //state property storing the current question.

	// A custom/separate variable that pass the function name
	const onMovieChange = (movie) => {
		setMovie(movie);
	};

	// A custom/separate function that pass the function surname
	const onSeatInputChange = (seat) => {
		setSeat(seat);
	};

	const onTicketInputChange = (event) => {
		setTicket(event.target.value);
	};

	const onSnackChange = (snack) => {
		setSnack(snack);
	};

	const onNameInputChange = (event) => {
		setNameInput(event.target.value);
	};

	//A custom/separate function that keep track of the current question
	const onStepChange = () => {
		setStep(step + 1);
	};

	return (
		<div>
			{step === 1 && (
				<FirstQuestion
					movie={movie}
					onMovieChange={onMovieChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 2 && (
				<SecondQuestion
					seat={seat}
					onSeatChange={onSeatInputChange}
					onStepChange={onStepChange}
				/>
			)}

			{step === 3 && (
				<ThirdQuestion
					ticketInput={ticketInput}
					onTicketInputChange={onTicketInputChange}
					onStepChange={onStepChange}
				/>
			)}

			{step === 4 && (
				<FourthQuestion
					snack={snack}
					onSnackChange={onSnackChange}
					onStepChange={onStepChange}
				/>
			)}

			{step === 5 && (
				<FifthQuestion
					nameInput={nameInput}
					onNameInputChange={onNameInputChange}
					onStepChange={onStepChange}
				/>
			)}

			{step === 6 && (
				<Overview
					movie={movie}
					seat={seat}
					ticketInput={ticketInput}
					snack={snack}
					nameInput={nameInput}
				/>
			)}
		</div>
	);
};

export default Form;

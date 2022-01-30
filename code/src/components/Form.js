import React, { useState } from 'react'; //importing hooks
//importing from other components
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import FourthQuestion from './FourthQuestion';
import FifthQuestion from './FifthQuestion';
import Overview from './Overview';
import Date from './Date';
import IntroPage from './IntroPage';

const Form = () => {
	const [movie, setMovie] = useState('A Nightmare on Elm Street'); //state variable storing the movie.
	const [seat, setSeat] = useState('1'); //state variable storing the seat.
	const [ticketInput, setTicket] = useState(''); //state variable storing the ticket.
	const [snack, setSnack] = useState('popcorn'); //state variable storing the snack.
	const [nameInput, setNameInput] = useState(''); //state variable storing the name.
	const [date, setDate] = useState(''); //state variable storing the date.
	const [step, setStep] = useState(1); //state variable storing the current question.

	const onMovieChange = (movie) => {
		setMovie(movie);
	};

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

	const onDateInputChange = (event) => {
		setDate(event.target.value);
	};

	const onStepChange = () => {
		setStep(step + 1);
	};

	const onMinusStepChange = () => {
		setStep(step - 1);
	};

	return (
		<div>
			{step === 1 && <IntroPage onStepChange={onStepChange} />}

			{step === 2 && (
				<FirstQuestion
					movie={movie}
					onMovieChange={onMovieChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 3 && (
				<SecondQuestion
					seat={seat}
					onSeatChange={onSeatInputChange}
					onStepChange={onStepChange}
					onMinusStepChange={onMinusStepChange}
				/>
			)}

			{step === 4 && (
				<ThirdQuestion
					ticketInput={ticketInput}
					onTicketInputChange={onTicketInputChange}
					onStepChange={onStepChange}
				/>
			)}
			{step === 5 && (
				<Date
					date={date}
					onDateInputChange={onDateInputChange}
					onStepChange={onStepChange}
					onMinusStepChange={onMinusStepChange}
				/>
			)}

			{step === 6 && (
				<FourthQuestion
					snack={snack}
					onSnackChange={onSnackChange}
					onStepChange={onStepChange}
					onMinusStepChange={onMinusStepChange}
				/>
			)}

			{step === 7 && (
				<FifthQuestion
					nameInput={nameInput}
					onNameInputChange={onNameInputChange}
					onStepChange={onStepChange}
					onMinusStepChange={onMinusStepChange}
				/>
			)}

			{step === 8 && (
				<Overview
					movie={movie}
					seat={seat}
					ticketInput={ticketInput}
					snack={snack}
					nameInput={nameInput}
					date={date}
				/>
			)}
		</div>
	);
};

export default Form;

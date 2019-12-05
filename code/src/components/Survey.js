import React, { useState } from 'react';
import './survey.css';
import { Compilation } from './Compilation';

export const Survey = () => {
	const [question, setQuestion] = useState(1);
	const [name, setName] = useState('');
	const [activity, setActivity] = useState('');
	const [food, setFood] = useState('');
	const [drinks, setDrinks] = useState('');
	const [fun, setFun] = useState(5);
	const [submit, setSubmit] = useState(false);

	// Arrays for radiobuttons and select
	const leasure = ['Concert', 'Football game', 'Pub', 'Wrestlingmatch'];
	const meal = ['Pizza', 'Poke Bowl', 'Sushi', 'Punkgryta'];

	const preventDefault = event => {
		event.preventDefault();
		setSubmit(true);
	};

	const next = () => {
		setQuestion(question + 1);
	};

	const back = () => {
		setQuestion(question - 1);
	};

	return (
		<div className='form-wrapper'>
			{!submit && (
				<form onSubmit={preventDefault}>
					<h1>Activity survey</h1>
					{question === 1 && (
						<div className='form'>
							<p>Hi friend! What is your name?</p>
							<label>
								<input
									type='text'
									placeholder='Enter Name'
									required
									onChange={event => setName(event.target.value)}
									value={name}
									onKeyPress={event => {
										event.key === 'Enter' && event.preventDefault();
									}}
								/>
							</label>
						</div>
					)}

					{question === 2 && (
						<div className='form'>
							<p>
								Oh, hi {name}! I feel like doing something fun today. What do
								you reckon?
							</p>
							{leasure.map(options => (
								<label key={options} className='radio'>
									<input
										type='radio'
										value={options}
										onChange={event => setActivity(event.target.value)}
										checked={activity === options}
									/>
									<span
										className='radio-check'
										tabIndex='0'
										aria-checked='false'
										role='radio'
									></span>
									{options}
								</label>
							))}
						</div>
					)}

					{question === 3 && (
						<div className='form'>
							<p>
								Ok {name}, {activity} it is! But i am kind of hungry, we should
								eat something before we go.
							</p>
							{meal.map(options => (
								<label key={options} className='checkbox'>
									<input
										type='checkbox'
										value={options}
										onChange={event => setFood(event.target.value)}
										checked={food === options}
									/>
									<span
										className='boxes'
										tabIndex='0'
										aria-checked='false'
									></span>
									{options}
								</label>
							))}
						</div>
					)}

					{question === 4 && (
						<div className='form'>
							<label>
								<p>{food} sounds good. What should we drink to that?</p>
								<div className='dropdown'>
									<select
										onChange={event => setDrinks(event.target.value)}
										value={drinks}
									>
										<option value=''>Pick your poison</option>
										<option value='Coffee'>Coffee</option>
										<option value='Beer'>Beer</option>
										<option value='Wine'>Wine</option>
										<option value='Julmust'>Julmust</option>
										<option value='Trocadero'>Trocadero</option>
									</select>
								</div>
							</label>
						</div>
					)}

					{question === 5 && (
						<div className='form'>
							<p>
								Last but not least {name}, lets try to put a value on how much
								fun we are going to have. So from 1-10, how much fun are we
								aiming at tonight?
							</p>
							<label>
								<input
									type='range'
									className='rangeStyle'
									min={0}
									max={10}
									value={fun}
									onChange={event => setFun(event.target.value)}
								/>
							</label>
							<div className='funMeter'>{fun}</div>
						</div>
					)}

					<div className='displayed-button'>
						{question !== 1 && (
							<button type='button' onClick={back}>
								Back
							</button>
						)}
						{question < 5 && (
							<button type='button' onClick={next}>
								Next
							</button>
						)}

						{question === 5 && <button type='submit'>Submit</button>}
					</div>
				</form>
			)}
			{submit && (
				<Compilation
					name={name}
					activity={activity}
					food={food}
					drinks={drinks}
					fun={fun}
				/>
			)}
		</div>
	);
};

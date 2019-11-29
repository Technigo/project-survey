import React, { useState } from 'react';

export const Survey = () => {
	const [question, setQuestion] = useState('name');
	const [name, setName] = useState('');
	const [activity, setActivity] = useState('');
	const [food, setFood] = useState('');
	const [drinks, setDrinks] = useState('');
	const [fun, setFun] = useState(3);

	const [submit, setSubmit] = useState(false);

	// Arrays for radiobuttons and select
	const leasure = ['Concert', 'Football game', 'Pub', 'Wrestlingmatch'];
	const drink = ['Beer', 'Trocadero', 'Wine', 'Coffee', 'Water'];
	const meal = ['Pizza', 'Poke Bowl', 'Sushi', 'Punkgryta'];
	const funMeter = [
		'we really want to do this?',
		'We are gonna have a drag',
		'Dont forget there is work tomorrow',
		'Now we are talking, wohooo',
		'We are going to have the best night ever!!!'
	];

	const preventDefault = event => {
		event.preventDefault();
		setSubmit(true);
	};

	const nextQ = () => {
		if (question === 'name') {
			setQuestion('activity');
		} else if (question === 'activity') {
			setQuestion('food');
		} else if (question === 'food') {
			setQuestion('fun');
		}
	};

	return (
		<div>
			<form onSubmit={preventDefault}>
				{question === 'name' && (
					<div className='form'>
						<p>What is your name?</p>
						<label>
							<input
								type='text'
								onChange={event => setName(event.target.value)}
								value={name}
							/>
						</label>
					</div>
				)}

				{question === 'activity' && (
					<div className='form'>
						<p>
							Oh, hi {name}! I feel like doing something fun today. What do you
							reckon?
						</p>
						{leasure.map(options => (
							<label key={options} className='radio'>
								<input
									type='radio'
									value={options}
									onChange={event => setActivity(event.target.value)}
									checked={activity === options}
								/>
								<span className='radio-label'>{options}</span>
							</label>
						))}
					</div>
				)}

				{question === 'food' && (
					<div className='form'>
						<p>
							Ok {name}, {activity} it is! But i am kind of hungry, we should
							eat something before we go. Choose some drinks while you are at
							it!
						</p>
						{meal.map(options => (
							<label className='select'>
								<input
									key={options}
									type='checkbox'
									value={options}
									onChange={event => setFood(event.target.value)}
									checked={food === options}
								/>
								<span className='check-label'>{options}</span>
							</label>
						))}
						{drink.map(options => (
							<label className='select'>
								<input
									key={options}
									type='checkbox'
									value={options}
									onChange={event => setDrinks(event.target.value)}
									checked={drinks === options}
								/>
								<span className='check-label'>{options}</span>
							</label>
						))}
					</div>
				)}

				{question === 'fun' && (
					<div className='form'>
						<p>Last but not least {name}, how fun are we going to have?</p>
						<label>
							<input
								type='range'
								min={1}
								max={5}
								value={fun}
								onChange={event => setFun(event.target.value)}
							/>
						</label>
						<div className='funMeter'>{fun}</div>
					</div>
				)}
				<button type='button' onClick={nextQ}>
					Next
				</button>
			</form>
		</div>
	);
};

import React, { useState } from 'react';

export const Survey = () => {
	const [question, setQuestion] = useState('name');
	const [name, setName] = useState('');
	const [friend, setFriend] = useState('');

	const [submit, setSubmit] = useState(false);

	const preventDefault = event => {
		event.preventDefault();
		setSubmit(true);
	};

	const nextQ = () => {
		if (question === 'name') {
			setQuestion('friend');
		}
	};

	return (
		<div>
			<form onSubmit={preventDefault}>
				{question === 'name' && (
					<div className='name'>
						<label>
							What is your name?
							<input
								type='text'
								onChange={event => setName(event.target.value)}
								value={name}
							/>
						</label>
					</div>
				)}
				<button type='button' onClick={nextQ}>
					Next
				</button>
			</form>
		</div>
	);
};

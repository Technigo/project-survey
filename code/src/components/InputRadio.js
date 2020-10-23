import React from 'react';
import '../Styles/InputRadio.css';

const InputRadio = ({ question, array, setAge, age }) => {
	return (
		<>
			<h2 tabIndex={'0'}>{question}</h2>
			{array.map(group => (
				<label
					className="radio-container"
					htmlFor={group}
					key={group}
					tabIndex="0"
				>
					<input
						id={group}
						type="radio"
						value={group}
						onChange={event => setAge(event.target.value)}
						checked={age === group}
					/>
					{group}
					<span className="custom-radio-btn"></span>
				</label>
			))}
		</>
	);
};

export default InputRadio;

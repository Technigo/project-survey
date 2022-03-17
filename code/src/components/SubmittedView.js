import React from 'react'

const SubmittedView = ({ answers, reset }) => {
	return (
		<h1>
		Thank you! You answered:{" "}
		{answers.map((answer, i) => (
			<p key={i}>{answer}</p>
		))}
		<button onClick={reset}>Reset</button>
	</h1>
	)
}

export default SubmittedView;
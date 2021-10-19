import React, { useState } from 'react'

import Form from './components/Form';
import Header from './components/Header';

import './index.css'


export const App = () => {

	const [showForm, setShowForm] = useState(false);
	const onSignUp = () => {
		setShowForm(true);
		setTimeout(() => {
			let element = document.getElementById("form");
			element.scrollIntoView();
		}, 500)
	}

	return (
		<>
			<Header
				onSignUp={onSignUp}
			/>
			{showForm === true && (
				<div className="wrapper">
					<section className="form-wrapper">
						<Form />
					</section>
				</div>
			)};
		</>
	);
};


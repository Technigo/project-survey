import React, { useState } from 'react'

import { NameQuestion } from './components/NameQuestion'
import { DropDown } from './components/DropDown'
import { RadioButton } from './components/RadioButton'
import { Summary } from './components/Summary'

export const Form = () => {
	const [name, setName] = useState('');
	const [brand, setBrand] = useState('');
	const [knowHeadPhone, setKnowHeadPhone] = useState('');
	const [summary, setSummary] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
		setSummary(true)
	};

  return (
		<>
			{!summary ? (
					<form onSubmit={handleSubmit} className='form-container' >
							<NameQuestion name={name} setName={setName} />
							<DropDown brand={brand} setBrand={setBrand} />
							<RadioButton knowHeadPhone={knowHeadPhone} setKnowHeadPhone={setKnowHeadPhone} />
							<button className='submit-button' type='submit'> Submit !</button>
					</form>
			) : (
					<Summary name={name} brand={brand} knowHeadPhone={knowHeadPhone} />
		)}
		</>
)
}
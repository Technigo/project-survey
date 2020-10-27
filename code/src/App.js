import React from 'react'

import { Form } from './Form'
import { Header } from './components/Header'

export const App = () => {
	return (
		<div className='App'>
			<div>
				<Header />
			</div>
			<div>
				<Form />
			</div>
		</div>
	);
};

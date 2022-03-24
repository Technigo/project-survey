import React from 'react'

import { Form } from 'components/Form'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'


export const App = () => {
	return (
		<>
			<div className='main-content'>
				<Header 
					header="Couple exit survey"
				/>
				<div className='form-container'>
					<Form />
				</div>
			</div>
			<Footer/>
		</>
	)
}

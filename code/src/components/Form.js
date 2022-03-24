import React, {useState} from 'react'

import questions from '../questions.json'
import { Input } from 'components/Input'
import { Select } from 'components/Select'
import { Button } from 'components/Button'
import { RadioButton } from 'components/RadioButton'

export const Form = () => {
	const [page, setPage] = useState(0);
	const [userName, setUserName] = useState('');
	const [breakupPerson, setBreakupPerson] = useState('');
	const [shipDuration, setShipDuration] = useState('default');
	const [breakupReason, setBreakupReason] = useState('');
	const [traitsCheckboxes, setTraitsCheckboxes] = useState([])
	const [getBackTogether, setGetBackTogether] = useState('')
	const [dateFriend, setDateFriend] = useState('')
	const [friendContactDetails, setFriendContactDetails] = useState('')
	const [error, setError] = useState('')

	const onSubmitting = (e) => {
		e.preventDefault();
	};

	const handleUserNameChange = (event) => {
		setUserName(event.target.value)
	}

	const handleBreakupReason = (event) => {
		setBreakupReason(event.target.value)
	}

	const handleDateFriend = (event) => {
		setDateFriend(event.target.value)
	}
	
	const handleGetBackTogether = (event) => {
		setGetBackTogether(event.target.value)
	}

	const handleFriendContactDetails = (event) => {
		setFriendContactDetails(event.target.value)
	}
	


	const nextPage = (value) => {
		if (value === 'default' || !value || value === []) {
			setError("Please enter an answer")
		} else {
			setError('')
			setPage(page + 1);
		}
	}

	const backPage = () => setPage(page - 1);

	const breakUpper = () => {
		if (breakupPerson === "I broke up with you.") {
			return ["you", "me"]
		}
		return ["I", "you"]
	}

	const handleShipDuration = (event) => {
		setShipDuration(event.target.value)
	}

	const handleTraitsCheckboxesChange = (trait) => {
		if (traitsCheckboxes.includes(trait)) {
			const filteredTraits = traitsCheckboxes.filter(item => item !== trait)
			setTraitsCheckboxes(filteredTraits)
		} else {
			setTraitsCheckboxes([...traitsCheckboxes, trait])
		}
	}

	const reconciliation = () => {
		if (getBackTogether === "Absolutely!" || getBackTogether === "Maybe?") {
			return true
		}
		return false
	}

	return (
		<form onSubmit={onSubmitting}>
			
			{page === 0 && (
				<div className='current-page'>
					<Input
						labelClassName={'text-label'}
						label={<h2>{questions.nameQuestion}</h2>}
						onChange={handleUserNameChange}
						value={userName}
						placeholder={'Your name'}
					/>
					<div>
						<h3 className='error'>{error}</h3>
						<Button
							key={'button-next'}
							onClick={() => nextPage(userName)}
							text='Next'
						/>
					</div>
				</div>
			)}
			{page === 1 && (
				<div className='current-page select-container'>
					<Select 
						shipDuration = {shipDuration}
						setShipDuration = {handleShipDuration}
						durationQuestion = {questions.durationQuestion}
						duration = {questions.duration}	
					/>
					<div>
						<h3 className='error'>{error}</h3>
						<Button
							key={'button-back'}
							onClick={backPage}
							text='Back'
						/>
						<Button
							key={'button-next'}
							onClick={() => nextPage(shipDuration)}
							text='Next'
						/>
					</div>
				</div>
			)}
			
			{page === 2 && (
				<div className='current-page radio-container'>
					<h2>{questions.breakupQuestion}</h2>
					<div>
						{questions.breakupAlts.map((alt) =>
							<div key={alt}>
								<RadioButton
									alt={alt}
									onChange={event => setBreakupPerson(event.target.value)}
									checked={breakupPerson === alt}
								/>
							</div>
						)}
					</div>
					<div>
						<h3 className='error'>{error}</h3>
						<Button
							key={'button-back'}
							onClick={backPage}
							text='Back'
						/>
						<Button
							key={'button-next'}
							onClick={() => nextPage(breakupPerson)}
							text='Next'
						/>
					</div>
				</div>
			)}

			{page === 3 && (
				<div className='current-page text-input-container'>
					<Input 
						labelClassName={'text-label'}
						label={<h2>{questions.breakupReasonQuestion}</h2>}
						onChange={handleBreakupReason}
						value={breakupReason}
						placeholder={shipDuration + ' ago you insinuated that...'}
					/>
					<div>
						<h3 className='error'>{error}</h3>
						<Button
							key={'button-back'}
							onClick={backPage}
							text='Back'
						/>
						<Button
							key={'button-next'}
							onClick={() => nextPage(breakupReason)}
							text='Next'
						/>
					</div>
				</div>
			)}
			{page === 4 && (
				<div className='current-page question'>
					<h2>{questions.traitsQuestion}</h2>
					<div className='traits-container'>
						{questions.traits.map((trait) => 
							<Input 
								labelKey={trait}
								labelClassName={'trait'}
								label={trait}
								onChange={() => handleTraitsCheckboxesChange(trait)}
								type={'checkbox'}
							/>
						)}
					</div>
					<div>
						<h3 className='error'>{error}</h3>
						<Button
							key={'button-back'}
							onClick={backPage}
							text='Back'
						/>
						<Button
							key={'button-next'}
							onClick={() => nextPage(traitsCheckboxes)}
							text='Next'
						/>
					</div>
				</div>
			)}
			{page === 5 && (
				<div className='current-page question'>
					<div>
						<h2>{questions.backTogetherQuestion}</h2>
						{questions.backTogetherAlts.map((alt) =>
							<div key={alt}>
								<RadioButton
									alt={alt}
									onChange={handleGetBackTogether}
									checked={getBackTogether === alt}
								/>
							</div>
						)}
					</div>
					{(getBackTogether === "Never in a million years!" || getBackTogether === "Nah.") && (
						<div>
							<h2>{questions.dateFriendQuestion}</h2>
							{questions.backTogetherAlts.map((alt, index) =>
								<div key={alt+index}>
									<RadioButton
										alt={alt}
										onChange={handleDateFriend}
										checked={dateFriend === alt}
									/>
								</div>
							)}
						</div>
					)}
					{(dateFriend === "Absolutely!" || dateFriend === "Maybe?") && (
						<div className='text-input-container'>
							<Input 
								label={<h2>{questions.friendNameQuestion}</h2>}
								onChange={handleFriendContactDetails}
								value={friendContactDetails}
								placeholder={'Name, number'}
							/>
						</div>
					)}
					<div>
						<h3 className='error'>{error}</h3>
						<Button 
							onClick={backPage}
							text='Back'
						/>
						<Button 
							onClick={() => nextPage(getBackTogether)}
							text='Send'
						/>
					</div>
				</div>
			)}
			{page === 6 && (
				<div className='current-page summary-page'>
					<h2>Dear {userName}</h2>

					<p>I'm sorry {breakUpper()[0]} broke up with {breakUpper()[1]}...</p>

					<p> We were together for {shipDuration} and I really cherish the time we had together!</p>

					<p>You say the reason we broke up was, and I quote, '{breakupReason}', but we both know the real reason.</p>

					{traitsCheckboxes.length > 0
						? traitsCheckboxes.includes("All of the above")
							? (<p>I know you think I have all the worst qualities a human can have and you are probably right... I'll try to be 		better!</p>)
							: (<p>I know you think I'm {traitsCheckboxes.join(', ')} and you are probably right... I'll try to be better!</p>)
						: breakUpper()[0] === "I" 
							? <p>I know you think I'm flawless but I'm stupid for breaking up with you!</p>
							: <p>Why did you break up with me if I'm so flawless?!</p>
					}

					{reconciliation()
						? <p>I also believe we should give it another go!</p>
						: (dateFriend === "Absolutely!" || dateFriend === "Maybe?")
							? {friendContactDetails}
								? <p>Thank you for being so open minded as to let me date your friend! I'll definitely contact them!</p>
								: <p>Thanks, but was it asking too much to give me their number?</p>
							: <p>I can accept that you don't want to give me another chance, but why can't I have your friend's number?</p>
					}
				</div>
			)}
		</form>
	)
}

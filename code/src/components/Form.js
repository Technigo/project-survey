import React, {useState} from 'react'

import questions from '../questions.json'
import { Select } from 'components/Select'
// import { Select } from './Select'


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

  	// prevents page from reload when form is submitted
	const onSubmitting = (e) => {
		e.preventDefault();
	};


	const nextPage = () => setPage(page + 1);
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

	const onTraitsCheckboxesChange = (trait) => {
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
		{/* <div className='form-main-content-container'> */}
			
			{page === 0 && (
				<div className='current-page'>
					<label htmlFor='nameQuestion'>
						<h2>{questions.nameQuestion}</h2>
					</label>
					<input
						id='nameQuestion'
						type='text'
						onChange={event => setUserName(event.target.value)}
						value={userName}
						placeholder='Your name'
					/>
					<div>
						<button  onClick={nextPage}>Next question</button>
					</div>
				</div>
			)}
			{page === 1 && (
				<div className='current-page select-container question'>
					<Select 
						shipDuration = {shipDuration}
						setShipDuration = {handleShipDuration}
						durationQuestion = {questions.durationQuestion}
						duration = {questions.duration}	
					/>
					<div>
						<button  onClick={backPage}>Previous question</button>
						<button  onClick={nextPage}>Next question</button>
					</div>
				</div>
			)}
			
			{page === 2 && (
				<div className='current-page radio-container'>
					<h2>{questions.breakupQuestion}</h2>
					{questions.breakupAlts.map((alt) =>
						<div>
							<label className='radio-button' htmlFor={alt}>
								{alt}
							
							<input
								id={alt}
								type='radio'
								value={alt}
								onChange={event => setBreakupPerson(event.target.value)}
								checked={breakupPerson === alt}
							/>
							</label>
						</div>
					)}
					<div>
						<button  onClick={backPage}>Previous question</button>
						<button  onClick={nextPage}>Next question</button>
					</div>
				</div>
			)}

			{page === 3 && (
				<div className='current-page text-input-container'>
					<label htmlFor='breakUpperQuestion'>
						<h2>Why do you think {breakUpper()[0]} broke up with {breakUpper()[1]}</h2>?
					</label>
					<input
						id='breakUpperQuestion'
						type='text'
						onChange={event => setBreakupReason(event.target.value)}
						value={breakupReason}
					/>
					<div>
						<button  onClick={backPage}>Previous question</button>
						<button  onClick={nextPage}>Next question</button>
					</div>
				</div>
			)}
			{page === 4 && (
				<div className='current-page question'>
					<h2>{questions.traitsQuestion}</h2>
					<div className='traits-container'>
						{questions.traits.map((trait) => 
							<label className='trait'>
								{trait}
								<input
									type='checkbox'
									checked={traitsCheckboxes.includes(trait)}
									onChange={() => onTraitsCheckboxesChange(trait)}
								/>
							</label>
						)}
					</div>
					<div>
						<button  onClick={backPage}>Previous question</button>
						<button  onClick={nextPage}>Next question</button>
					</div>
				</div>
			)}
			{page === 5 && (
				<div className='current-page question'>
					<div>
						<h2>{questions.backTogetherQuestion}</h2>
						{questions.backTogetherAlts.map((alt) =>
							<div>
								<label className='radio-button'>
									{alt}
									<input
										type='radio'
										value={alt}
										onChange={event => setGetBackTogether(event.target.value)}
										checked={getBackTogether === alt}
									/>
								</label>
							</div>
						)}
					</div>

					{(getBackTogether === "Never in a million years!" || getBackTogether === "Nah.") && (
						<div>
							<div>
								<h2>{questions.dateFriendQuestion}</h2>
								{questions.backTogetherAlts.map((alt) =>
									<div>
										<label className='radio-button'>
											{alt}
											<input
												type='radio'
												value={alt}
												onChange={event => setDateFriend(event.target.value)}
												checked={dateFriend === alt}
											/>
										</label>
									</div>
								)}
							</div>
							{/* <div className='text-input-container'>
								<label htmlFor='jobtitle'>
									{questions.jobTitle}
								</label>
								<input
									id='jobtitle'
									type='text'
									onChange={event => setJobTitle(event.target.value)}
									value={jobTitle}
								/>
							</div> */}
						</div>
					)}

					{(dateFriend === "Absolutely!" || dateFriend === "Maybe?") && (
						<div className='text-input-container'>
							<label htmlFor='friendContactDetails'>
							<h2>{questions.friendNameQuestion}</h2>
							</label>
							<input
								id='friendContactDetails'
								type='text'
								onChange={event => setFriendContactDetails(event.target.value)}
								value={friendContactDetails}
							/>
						</div>
					)}
					<div>
						<button  onClick={backPage}>Previous question</button>
						<button  onClick={nextPage}>Next question</button>
					</div>
				</div>
			)}
		{/* </div> */}
			{page === 6 && (
				<div className='current-page'>
					<button onClick={nextPage}>Submit</button>
				</div>
				
			)}

			{page === 7 && (
				<div className='current-page'>
					<h2>Dear {userName}</h2>
					{/* <p>Thank you {userName}!</p> */}
					<p>I'm sorry {breakUpper()[0]} broke up with {breakUpper()[1]}...</p>
					<p> We were together for {shipDuration} and I really cherish the time we had together!</p>
					<p>You say the reason we broke up was, and I quote, '{breakupReason}', but we both know the real reason.</p>
					{traitsCheckboxes.length > 0
						? (<p>I know you think I'm {traitsCheckboxes.join(', ')} and you are probably right! 		I'll try to be better</p>)
						: breakUpper()[0] === "I" 
							? <p>I know you think I'm flawless but I'm stupid for breaking up with you!</p>
							: <p>Why did you break up with me if I'm so flawless?!</p>
					}
					{reconciliation
						? <p>I also believe we should give it another go!</p>
						: friendContactDetails
							? <p>Thank you for being so open minded as to let me date your friend! Love you!</p>
							: <p>I can accept that you don't want to give me another chance, but why can't I have your friend's number?</p>
					}
					{/* <p>{friendContactDetails}</p> */}
				</div>
			)}
		</form>
	)
}




// <div className='question'>
// 						<label>
// 							Were You Comfortable Talking To Your Manager?
// 							<input
// 								type='checkbox'
// 								checked={talkToManager}
// 								onChange={event => setTalkToManager(event.target.checked)}
// 							/>
// 						</label>

// 						{talkToManager && (
// 							<div className='radio-container'>
// 								City:
// 								{questions.city.map((c) =>
// 									<div>
// 										<label className='radio-button' htmlFor={c}>
// 											{c}
										
// 										<input
// 											id={c}
// 											type='radio'
// 											value={c}
// 											onChange={event => setCity(event.target.value)}
// 											checked={city === c}
// 										/>
// 										</label>
// 									</div>
// 								)}
// 							</div>
// 						)}
// 						<div>
// 							<button  onClick={backPage}>Previous question</button>
// 							<button  onClick={nextPage}>Next question</button>
// 						</div>
// 					</div>
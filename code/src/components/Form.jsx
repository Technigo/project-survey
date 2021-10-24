import React, {useState} from "react"
import FirstQuestion from "./FirstQuestion"
import SecondQuestion from "./SecondQuestion"
import ThirdQuestion from "./ThirdQuestion"
import FourthQuestion from "./FourthQuestion"
import FifthQuestion from "./FifthQuestion"
import Overview from "./Overview"
import Footer from "./Footer"

const Form = () => {
	const [question, setQuestion] = useState(1)
	const [alias, setAlias] = useState('')
	const [weapon, setWeapon] = useState('')
	const [companion, setCompanion] = useState('')
	const [game, setGame] = useState('')

	const restartGame = () => {
		setQuestion(1)
		setAlias('')
		setWeapon('')
		setCompanion('')
		setGame('')
	}
	
	const onQuestionChange = () => {
		setQuestion(question + 1)
	}

	const onQuestionBackChange = () => {
		setQuestion(question - 1)
	}

	const onAliasChange = (event) => {
		setAlias(event.target.value)
	}

	const onWeaponChange = (event) => {
		setWeapon(event.target.value)
	}

	const onCompanionChange = (event) => {
		setCompanion(event.target.value)
	}

	const onGameChange = (event) => {
		setGame(event.target.value)
	}


	return (
		<main>
			<div class="background-img" role="img" aria-label="Adventurous nature picture"></div>
			<div>
				{question === 1 && (
					<FirstQuestion 
						onQuestionChange={onQuestionChange}
					/>
				)}
				{question === 2 && (
					<SecondQuestion 
						onQuestionBackChange={onQuestionBackChange}
						onQuestionChange={onQuestionChange}
						alias={alias}
						onAliasChange={onAliasChange}
					/>
				)}
				{question === 3 && (
					<ThirdQuestion 
						onQuestionBackChange={onQuestionBackChange}
						onQuestionChange={onQuestionChange}
						alias={alias}
						onAliasChange={onAliasChange}
						weapon={weapon}
						onWeaponChange={onWeaponChange}
					/>
				)}
				{question === 4 && (
					<FourthQuestion 
						onQuestionBackChange={onQuestionBackChange}
						onQuestionChange={onQuestionChange}
						alias={alias}
						onAliasChange={onAliasChange}
						weapon={weapon}
						onWeaponChange={onWeaponChange}
						companion={companion}
						onCompanionChange={onCompanionChange}
					/>
				)}
				{question === 5 && (
					<FifthQuestion
						onQuestionBackChange={onQuestionBackChange}
						onQuestionChange={onQuestionChange}
						game={game}
						onGameChange={onGameChange}
					/>
				)}
				{question === 6 && (
					<Overview
						onQuestionBackChange={onQuestionBackChange}
						onQuestionChange={onQuestionChange}
						alias={alias}
						onAliasChange={onAliasChange}
						weapon={weapon}
						onWeaponChange={onWeaponChange}
						companion={companion}
						onCompanionChange={onCompanionChange}
						game={game}
						onGameChange={onGameChange}		
						restartGame={restartGame}				
					/>
				)}
			</div>
			<Footer />
		</main>
	)
}
export default Form
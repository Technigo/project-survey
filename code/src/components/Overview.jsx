import React from "react"

const Overview = ({ alias, weapon, companion, game, restartGame }) => {

	return (
		<section className="overview">
			<h2>Your avatar:</h2>
			<p>Alias: {alias}</p>
			<p>Weapon: {weapon}</p>
			<p>Companion: {companion}</p>
			<p>First task will be: {game}</p>
			<button
				type="reset"
				onClick={restartGame}
			>
			Again!
			</button>
		</section>
	)
}

export default Overview
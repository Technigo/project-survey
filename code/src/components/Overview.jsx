import React from "react";

const Overview = ({ alias, weapon, companion, game, restartGame }) => {

	return (
		<section className="overview" role="img" aria-label="Adventurous nature picture">
			<h2>Your avatar:</h2>
			<p>Alias: {alias}</p>
			<p>Weapon: {weapon}</p>
			<p>Person that got your back: {companion}</p>
			<p>First task will be in: {game}</p>
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
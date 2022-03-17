import React from "react";

export const PronounInput = ({ pronoun, setPronoun }) => {
	const pronouns = ["she/her", "he/him", "they/them"];

	return (
		<fieldset className="radiobutton-wrapper">
			<legend className="radio">pronoun</legend>
			{pronouns.map((pron) => (
				<label key={pron} className="radio">
					<input
						type="radio"
						name="pronoun"
						value={pron}
						onChange={(e) => setPronoun(e.target.value)}
						checked={pronoun === pron}
						required
					/>
					<p>{pron}</p>
				</label>
			))}
		</fieldset>
	);
};

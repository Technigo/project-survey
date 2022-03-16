import React from "react";

export const GiftInput = ({ state, handleInput }) => {
	return (
		<>
			<h3>
				Do you want the guests to bring gifts or encourage them to make a
				donation instead?
			</h3>
			<fieldset className="radiobutton-wrapper">
				<legend className="radio">Gift or donation</legend>
				<label className="radio">
					<input
						type="radio"
						name="gift"
						value="Gift"
						onChange={handleInput}
						checked={state === "Gift"}
						required
					/>
					Gift
				</label>

				<label className="radio">
					<input
						type="radio"
						name="gift"
						value="Donation"
						onChange={handleInput}
						checked={state === "Donation"}
						required
					/>
					Donation
				</label>
			</fieldset>
		</>
	);
};

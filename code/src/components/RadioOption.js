import React from "react";

const pets = ["dog", "cat", "rat", "fish", "dragon"];

const RadioOption = ({ pet, setPet, item }) => {
	const onPetChange = (event) => {
		setPet(event.target.value);
	};

	return (
		<section>
			<div className="radio-button-container">
				{pets.map((item) => (
					<label className="radio-option-pet" key={item}>
						<input
							type="radio"
							value={item}
							onChange={onPetChange}
							checked={pet === item}
						/>
						{item}
					</label>
				))}
			</div>
		</section>
	);
};
export default RadioOption;

import React from "react";
import ThemeOne from "../assets/theme-one.png";
import ThemeTwo from "../assets/theme-two.png";
import ThemeThree from "../assets/theme-three.png";
import ThemeFour from "../assets/theme-four.png";
import ThemeFive from "../assets/theme-five.png";

import "../theme.css";

export const ThemeInput = ({ state, handleInput }) => {
	return (
		<div className="theme-wrapper">
			<h3>Select which color theme you prefer!</h3>
			<legend className="radio theme">Choose color theme</legend>
			<div className="theme-wrapper--images">
				<label>
					<input
						type="radio"
						name="theme"
						value="purpleyellow"
						onChange={handleInput}
						checked={state === "purpleyellow"}
						className="theme"
						required
					/>
					<img src={ThemeOne} alt="color theme for gift card" />
				</label>

				<label>
					<input
						type="radio"
						name="theme"
						value="yellowpink"
						onChange={handleInput}
						checked={state === "yellowpink"}
						className="theme"
						required
					/>
					<img src={ThemeTwo} alt="color theme for gift card" />
				</label>

				<label>
					<input
						type="radio"
						name="theme"
						value="pinkgreen"
						onChange={handleInput}
						checked={state === "pinkgreen"}
						className="theme"
						required
					/>
					<img src={ThemeThree} alt="color theme for gift card" />
				</label>

				<label>
					<input
						type="radio"
						name="theme"
						value="greenblue"
						onChange={handleInput}
						checked={state === "greenblue"}
						className="theme"
						required
					/>
					<img src={ThemeFour} alt="color theme for gift card" />
				</label>

				<label>
					<input
						type="radio"
						name="theme"
						value="bluepurple"
						onChange={handleInput}
						checked={state === "bluepurple"}
						className="theme"
						required
					/>
					<img src={ThemeFive} alt="color theme for gift card" />
				</label>
			</div>
		</div>
	);
};

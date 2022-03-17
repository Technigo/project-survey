import React from "react";

import { PennantImage } from "./PennantImage";
import "../overview.css";

export const Overview = ({ pronoun, state }) => {
	let possPronoun;
	if (pronoun === "she/her") {
		possPronoun = "her";
	} else if (pronoun === "he/him") {
		possPronoun = "his";
	} else {
		possPronoun = "their";
	}

	const months = [
		"Jan",
		"Feb",
		"March",
		"April",
		"May",
		"June",
		"July",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const formattedDate = new Date(state.date);
	let month = months[formattedDate.getMonth()];
	let day = formattedDate.getDate();

	return (
		<div
			className="invitation-card--wrapper"
			style={{
				backgroundColor:
					state.theme === "purpleyellow" ||
					state.theme === "yellowpink" ||
					state.theme === "pinkgreen"
						? "#FFF6D7"
						: "#F5F4FB",
				borderColor:
					state.theme === "greenblue" || state.theme === "pinkgreen"
						? "#1E855E"
						: "#AC699D",
			}}
		>
			<PennantImage color={state.theme} alt="pennant in colors" />
			<h1>{state.name}</h1>
			<h2 className="invitation-text">
				Invites you to celebrate {possPronoun} {state.pronouns}{" "}
				<span className="age-text">{state.age} </span>
				birthday<div className="second-font">!</div>
			</h2>
			<p className="date-text">
				<span className="month">{month}</span>
				<span className="day">{day}</span>{" "}
				<div className="time">
					<span className="time-upper">{state.timeFrom}-</span>
					<span className="time-lower">{state.timeTo}</span>
				</div>
			</p>

			<p className="location-text">
				The party will be held at {state.location}
			</p>
			<p className="rvsp-text">
				RVSP: {state.rvspTo} {state.rvspContactDetails}
			</p>
			<em className="gift-text">
				{state.gift === "Donation"
					? "Please, no gifts! Consider a donation instead."
					: ""}
			</em>
		</div>
	);
};

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

	let backgroundcolor;
	if (state.theme === "purpleyellow" || "yellowpink") {
		backgroundcolor = true;
	} else {
		backgroundcolor = false;
	}

	//return month as month
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
			style={{ backgroundColor: backgroundcolor ? "#FFDDDD" : "#D5E4F5" }}
		>
			<PennantImage color={state.theme} alt="pennant in colors" />
			<h1 className="highlight">{state.name}</h1>
			<h2 className="invitation-text">
				Invites you to celebrate {possPronoun} {state.pronouns} {state.age}{" "}
				birthday
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
				RVSP {state.rvspTo}: {state.rvspContactDetails}
			</p>
			<em className="gift-text">
				{state.gift === "Donation"
					? "Please, no gifts! Consider a donation instead."
					: ""}
			</em>
		</div>
	);
};

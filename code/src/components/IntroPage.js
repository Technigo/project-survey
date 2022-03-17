import React from "react";

import Balloon from "../assets/balloons.png";
import "../intropage.css";

export const IntroPage = () => {
	return (
		<>
			<img className="balloons" src={Balloon} alt="balloons"></img>
			<h2 className="intro-text">Someone is planning a birthday party, huh?</h2>
			<h3 className="intro-text">
				Create a customized invitation card for your kids{" "}
				<strong>birthday party!</strong>
			</h3>
		</>
	);
};

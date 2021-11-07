import React from "react";

export const Overview = ({ languageInput, frameworkInput, problemSolvingInput, backgroundInput }) => {
	return (
		<main className="overview-container">
			<h3 className="overview-heading">Question 1</h3>

			{languageInput === "German" ? <p className="overview-paragraph">Oh noo!! You find German to be the most useful language as a developer. Ebba doesn't know any German.</p> : <p className="overview-paragraph">You find {languageInput} to be the most useful language as a developer. That is great! Ebba is skilled in JavaScript, HTML5, CSS3 as well as Node.js</p>}

			<h3 className="overview-heading">Question 2</h3>
			{frameworkInput === "React" && <p className="overview-paragraph">React is most commonly used framework at your company. Amazing! Ebba loves using the framework React.</p>}
			{frameworkInput === "Bootstrap" && <p className="overview-paragraph">Bootstrap is most commonly used framework at your company. Ebba is familiar with the framework Bootstrap but her favorite framework is React.</p>}
			{frameworkInput === "Other" && <p className="overview-paragraph">You use another framework at your company that Ebba is not yet familiar with. But don’t worry! Ebba is passionate in anything code related and loves to learn new things.</p>}

			<h3 className="overview-heading">Question 3</h3>
			{problemSolvingInput === "Yes" && <p className="overview-paragraph">You find problem solving skills to be a good trait for a developer. Perfect, Ebba is a great problem solver!</p>}
			{problemSolvingInput === "No" && <p className="overview-paragraph">You don’t find problem solving skills to be a good trait for a developer. That is unfortunate. Ebba is a great problem solver.</p>}

			<h3 className="overview-heading">Question 4</h3>
			{backgroundInput === "Yes" && <p className="overview-paragraph">You think it is useful to have a backround in Graphic Deisgn. Ebba has 5 years experience from working as a graphic designer.</p>}
			{backgroundInput === "No" && <p className="overview-paragraph">You don't think it is useful to have a backround in Graphic Deisgn. Ebba has 5 years experience from working as a graphic designer, let her prove you wrong.</p>}

			<h3 className="overview-heading">Conclusion</h3>
			<p>You should hire Ebba!</p>
		</main>
	);
};

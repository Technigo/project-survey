import React from "react";

export const PennantImage = ({ color }) => {
	let first = "";
	let second = "";

	if (color === "purpleyellow") {
		first = "AC699D";
		second = "FFEBA1";
	} else if (color === "yellowpink") {
		first = "FFEBA1";
		second = "FDBCBC";
	} else if (color === "pinkgreen") {
		first = "FDBCBC";
		second = "75A996";
	} else if (color === "greenblue") {
		first = "75A996";
		second = "5D87B8";
	} else {
		first = "5D87B8";
		second = "AC699D";
	}

	return (
		<svg
			width="370"
			height="120"
			viewBox="0 0 376 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0.766418 31.2133C0.766418 31.2133 22.942 42.8768 49.5527 42.8768L108.056 49.0974H154.669H202.761H247.155L293.397 42.8768L336.311 37.0451L358.532 31.2133L375.766 26.2774"
				stroke="black"
			/>
			<path
				d="M38.5087 37.7365L74.4478 39.4081L52.6601 89.5681L38.5087 37.7365Z"
				fill={`#${first}`}
			/>
			<path
				d="M79.9489 42.0952L115.932 42.6527L96.1299 93.457L79.9489 42.0952Z"
				fill={`#${second}`}
			/>
			<path
				d="M122.415 43.3924H158.608L139.701 94.7375L122.415 43.3924Z"
				fill={`#${first}`}
			/>
			<path
				d="M169.193 45.2782L205.159 44.1635L188.38 95.818L169.193 45.2782Z"
				fill={`#${second}`}
			/>
			<path
				d="M215.978 44.0006L251.944 42.8859L235.165 94.5404L215.978 44.0006Z"
				fill={`#${first}`}
			/>
			<path
				d="M259.884 42.3069L295.604 38.4145L283.961 91.1702L259.884 42.3069Z"
				fill={`#${second}`}
			/>
			<path
				d="M302.35 37.8354L338.07 33.9429L326.428 86.6987L302.35 37.8354Z"
				fill={`#${first}`}
			/>
		</svg>
	);
};

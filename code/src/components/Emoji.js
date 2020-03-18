import React from 'react';

export const Emoji = ({ emoji }) => {
	return (
		<React.Fragment>
			<span className="emoji" role="img" aria-label="Dog">
				` ${emoji} `
			</span>
		</React.Fragment>
	);
};

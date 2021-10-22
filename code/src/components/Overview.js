import React from 'react';

// const audioTune = new Audio('</assets/soundfile.mp3>');
// const [playInLoop, setPlayInLoop] = useState(false);
// useEffect(() => {
// 	audioTune.load();
// }, []);

const Overview = ({ movie, seat, ticket, snack, nameInput }) => {
	return (
		<section className="summary" tabIndex="6">
			<h2>
				Enjoy your scary movie <br />{' '}
				<span className="name-overview"> {nameInput}! </span>
			</h2>
			<p>
				You have a <span className="details"> {ticket} </span> ticket to{' '}
				<span className="details">{movie} </span> on seat number{' '}
				<span className="details">{seat}</span> with{' '}
				<span className="details">{snack}</span>!
			</p>
		</section>
	);
};

export default Overview;

/* <p style={{ color: flavor === 'garlic' ? 'red' : 'blue' }}>
				You want {flavor} popcorn
			</p> */

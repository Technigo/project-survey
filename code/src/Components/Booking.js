const Booking = ({ setWorkout, setLocation }) => {
	const workouts = [
		{
			name: 'workout',
			value: 'Holy Shred',
			label: 'Holy Shred',
		},
		{
			name: 'workout',
			value: 'Holy Build',
			label: 'Holy Build',
		},
		{
			name: 'workout',
			value: 'Holy Ride',
			label: 'Holy Ride',
		},
		{
			name: 'workout',
			value: 'Holy Booty',
			label: 'Holy Booty',
		},
		{
			name: 'workout',
			value: 'Open Gym',
			label: 'Open Gym',
		},
	];

	const locations = [
		{
			name: 'location',
			value: 'Oud Zuid',
			label: 'Oud Zuid',
		},
		{
			name: 'location',
			value: 'Oud West',
			label: 'Oud West',
		},
	];

	return (
		<>
			<div className="booking">
				{workouts.map((workout) => {
					return (
						<>
							<input
								type="radio"
								name={workout.name}
								value={workout.value}
								onChange={(e) => setWorkout(e.target.value)}
							/>
							<label>{workout.label}</label>
						</>
					);
				})}
			</div>

			<div className="location">
				{locations.map((location) => {
					return (
						<>
							<input
								type="radio"
								name={location.name}
								value={location.value}
								onChange={(e) => setLocation(e.target.value)}
							/>
							<label>{location.label}</label>
						</>
					);
				})}
			</div>
		</>
	);
};

export default Booking;

import React from 'react';

const Overview = ({bandChoice, seatChoice, arenaChoice, tickets}) => {
  return (
    <form>
      <h1>Congratulations! These were your choices!</h1>
      <p>You chose this venue: {arenaChoice}</p>
      <p>You chose this many tickets: {tickets}</p>
      <p>You chose this band: {bandChoice}</p>
      <p>You chose this seat: {seatChoice}</p>
      <p>Great! We will send you your tickets! Have fun!</p>
    </form>
  );
};

export default Overview;
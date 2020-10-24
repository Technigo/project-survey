import React from 'react';



const Summary = ({ userName, userEnergy, userHabits }) => {

  return (
    <div className="summary-card">
      <p className="summary-text">Good job {userName}!
      You push yourself {userEnergy} and work on shredding what is no longer useful to you {userHabits}.</p>
      <p>Eat, sleep, react. Repeat.</p>
    </div>

  );

};


export default Summary;
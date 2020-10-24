import React from 'react';



const Summary = ({ userName, userEnergy, userKindness }) => {

  return (
    <div className="question-card">
      <p>Good job {userName}!
      You push yourself {userEnergy} and work on shredding what is no longer useful to you {userKindness}</p>
      <h4>Thank you for particpating </h4>
    </div>

  );

};


export default Summary 
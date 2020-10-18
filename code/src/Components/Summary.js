import React from 'react';

import './summary.css';

export const Summary = ( {name, email, canContributeWith, yearsOfExperience, wantsToBeMentor} ) => {
  
  return (
    <section className="summary-box">
      <h2 className="summary-heading">Your answers:</h2>
      <div className="answers-wrapper">
        <p className="summary-text">{name}</p>
        <p className="summary-text">{email} </p>
        <p className="summary-text">{canContributeWith} </p>
        <p className="summary-text">{yearsOfExperience}</p>
        <p className="summary-text">{wantsToBeMentor}</p>
     </div>
    </section>
  );
};
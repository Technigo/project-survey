import React from 'react';


export const Summary = ( {name, email, canContributeWith, yearsOfExperience, wantsToBeMentor} ) => {
  
  return (
    <section>
      <h2>
        Hey {name}!
        {email} 
        {canContributeWith} 
        {yearsOfExperience}
        {wantsToBeMentor}
      </h2>
    </section>
  );
};
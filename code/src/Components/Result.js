import React from 'react';

export const Result = ({ adjective, foodNoun, ingVerb, clothingNoun, celebrity, jobSector }) => {
  return (
    <>
      <h1>This is what I learnt about you: </h1>
      <p>
        The thing you like most about your workplace
        are the {adjective} {foodNoun}.
      </p>
      <p> In your spare time you enjoy {ingVerb}, with your {clothingNoun} on,
        preferably in the company of {celebrity}.
      </p>
      <p> If you were to change your career, you would probably end up in the {jobSector} industry.
      </p>
      <p> You are most proud of your X smile, your generous Y and your ability to always Z </p>
      <p> Your previous boss would probably describe you as X.</p>
    </>
  )
}
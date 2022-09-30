import React from 'react';

const SubmissionOverview = ({ userName, adultAge, favClothes, contentLevel }) => {
  return (
    <>
      <p>Hi {userName}!</p>
      <p>You think people are adults at age: {adultAge}.</p>
      <p>Your favorite piece of clothing is {favClothes}.</p>
      <p>On a scale of 1 - 10 you are this satisfied with the size of your feet: {contentLevel}.</p>
    </>
  )
}

export default SubmissionOverview;
import React from 'react';

const SubmissionOverview = ({ userName, adultAge, favClothes }) => {
  return (
    <>
      <p>Hej {userName} !</p>
      <p>You think people are adults at age:{adultAge}  </p>
      <p>Your favorite piece of clothing is {favClothes}</p>
    </>
  )
}

export default SubmissionOverview;
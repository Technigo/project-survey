import React from 'react';

export const Result = ({ department, climate, activity }) => {
  return (
    <>
      <p>Thank you for taking time out of the {department} department to answer this survey!</p>
      <p>You would like to go somewhere with a {climate} climate.</p>
      <p>Your ideal kind of activity would be {activity}.</p>
      <p>We will come back to you with details for our next company retreat very soon!</p>
    </>
  );
}
import React from 'react';

export const Result = ({ department, climate, activity }) => {
  return (
    <div className="resultWrapper">
      <h4>Thank you for taking time out of the {department} department to answer this survey!</h4>
      <h5>You would like to go somewhere with a {climate} climate.</h5>
      <h5>Your ideal kind of activity would be {activity}.</h5>
      <h6>We will get back to you with details shortly!</h6>
    </div>
  );
}
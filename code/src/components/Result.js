import React from 'react';

export const Result = ({ department, climate, activity }) => {
  return (
    <div className="resultWrapper">
      <div className="resultsBox">
        <h4>You would like to go somewhere with a {climate} climate.
        </h4>
        <h4>Your ideal kind of activity would be {activity}.
        </h4>
      </div>
      <div className="thankYou">
        <h5>Thanks for taking time out of the {department} department to answer this survey!
          We&apos;ll get back to you shortly.
        </h5>
      </div>
    </div>
  );
}
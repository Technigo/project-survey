import React from 'react';

export const Result = ({ team, climate, activity }) => {
  return (
    <div className="resultWrapper">
      <div className="resultsBox">
        <h4>Thanks for taking time out of the {team} team
        to answer this survey!<br /><br />
        We have noted that you like the sound of {activity}
        in a {climate} climate.<br /> <br />
        We&apos;ll get back to you shortly!
        </h4>
      </div>
    </div>
  );
}
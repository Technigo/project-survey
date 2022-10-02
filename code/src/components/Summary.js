import React from 'react';

const Summary = ({ userName, coolestThing, perfectJob, fondness }) => {
  return (
    <>
      <p>Alright <b>{userName}</b>, here is how you answered!</p>
      <p>
        You think the coolest thing about them is: <br />
        {coolestThing}
      </p>
      <p>
        The perfect human job for them would be:<br />
        {perfectJob}
      </p>
      <p>
        On a scale of 0-10, you love them this much:<br />
        {fondness}
      </p>
      <p style={{ marginTop: '2em', textAlign: 'center' }}>Thank you for taking part in this survey 😊</p>
    </>
  );
}

export default Summary;
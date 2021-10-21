import React from 'react';

const Summary = ({
  nameInput,
  emailInput,
  eventInput,
  musicInput,
  dateInput,
}) => {
  return (
    <section>
      <h2>Here's your booking info, {nameInput}: </h2>
      <p>Name: {nameInput}</p>
      <p>Email: {emailInput}</p>
      <p>
        Event Type:
        {eventInput === 'Wedding/Anniversary'
          ? ' Wedding/Anniversary'
          : ' Birthday'
          ? ' Other'
          : ' Other'}
      </p>
      <p>
        Music Style:
        {musicInput === 'Pop'
          ? ' Pop'
          : ' Classical'
          ? ' Rock/Metal'
          : ' Hip Hop'
          ? ' Other'
          : ' Other'}
      </p>
      <p>Date: {dateInput.replace('T', ' ')}</p>
    </section>
  );
};

export default Summary;

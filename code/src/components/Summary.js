import React from 'react';

const Summary = ({
  nameInput,
  emailInput,
  eventInput,
  musicInput,
  dateInput,
  onRestartChange,
}) => {
  return (
    <section class='Summary'>
      <h2>Here's your booking info, {nameInput}: </h2>
      <p>Name: {nameInput}</p>
      <p>Email: {emailInput}</p>
      <p>
        Event Type:
        {eventInput === 'Wedding/Anniversary'
          ? ' Wedding/Anniversary'
          : ' Birthday'
          ? ' Birthday'
          : ' Other'}
      </p>
      <span>
        Music Style:{' '}
        {(() => {
          switch (musicInput) {
            case 'Classical':
              return <p className='Music-style'> Classical</p>;
            case 'Pop':
              return <p className='Music-style'> Pop</p>;
            case 'Rock/Metal':
              return <p className='Music-style'> Rock/Metal</p>;
            case 'Hip Hop':
              return <p className='Music-style'> Hip Hop</p>;
            case 'Other':
              return <p className='Music-style'> Other</p>;
          }
        })()}
      </span>
      <p>Date: {dateInput.replace('T', ' ')}</p>
      <button onClick={onRestartChange}>Restart</button>
    </section>
  );
};

export default Summary;

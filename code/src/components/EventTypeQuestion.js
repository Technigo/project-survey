import React from 'react';

const eventTypes = ['Wedding/Anniversary', 'Birthday', 'Other'];

const eventTypeQuestion = ({
  eventInput,
  onEventInputChange,
  onStepChange,
}) => {
  return (
    <form>
      <h1>Event booking</h1>
      <p>
        So you want the Imaginary Quartet to play at your event. That's
        wonderful!
      </p>
      <p>What type of event would you like us to play at?</p>
      {eventTypes.map((eventTyp) => (
        <label key={eventTyp}>
          <input
            type='radio'
            value={eventTyp}
            onChange={onEventInputChange}
            checked={eventInput === eventTyp}
          />
          {eventTyp}
        </label>
      ))}
      <button onClick={onStepChange}>Next</button>
    </form>
  );
};

export default eventTypeQuestion;

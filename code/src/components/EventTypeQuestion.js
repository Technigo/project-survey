import React from 'react';

const eventTypes = ['Wedding/Anniversary', 'Birthday', 'Other'];

const eventTypeQuestion = ({
  eventInput,
  onEventInputChange,
  onStepChange,
}) => {
  return (
    <form className='long-text-form'>
      <h1>𝄞 Event booking</h1>
      <p>
        So you want the Imaginary Quartet to play at your event. That's
        wonderful!
      </p>
      <p> What type of event would you like us to play at?</p>
      <ul>
        {eventTypes.map((eventType) => (
          <li>
            <label key={eventType}>
              <input
                type='radio'
                value={eventType}
                onChange={onEventInputChange}
                checked={eventInput === eventType}
                className='eventTypeOptions'
              />
              {eventType}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={onStepChange}>Next</button>
    </form>
  );
};

export default eventTypeQuestion;

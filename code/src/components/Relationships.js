import React from 'react';

export const Relationships = ({ relationships, setRelationships }) => {
  const relArray = [
    'we meet on accations',
    'Coffee Is always a good idea',
    'You got blood, I got coffe in my veins',
    'Don´t drink coffee',
  ];

  return (
    <div className="survey-item relationships">
      <p className="section-heading">What´s your relationship with coffe?</p>

      {relArray.map((choice) => (
        <label className="relationships" key={choice}>
          <input
            type="radio"
            value={choice}
            onChange={(event) => setRelationships(event.target.value)}
            Checked={relationships === choice}
          />
          {choice}
        </label>
      ))}
    </div>
  );
};

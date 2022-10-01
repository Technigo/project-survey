import React from 'react';

export const Relationships = ({ setRelationships }) => {
  const relArray = [
    'we meet on accations',
    'Coffee Is always a good idea',
    'You got blood, I got coffe in my veins',
    'I don´t drink coffee!'
  ];

  return (
    <div className="survey-item relationships">
      <p className="section-heading">What´s your relationship with coffe?</p>

      {relArray.map((choice) => (
        <label className="relationships" key={choice} htmlFor="relationships">
          <input
            type="radio"
            value={choice}
            name="relationschips"
            onChange={(event) => setRelationships(event.target.value)}
            Checked={relArray === choice} />
          {choice}
        </label>
      ))}
    </div>
  );
};

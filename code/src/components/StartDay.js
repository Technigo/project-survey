import React from 'react';

export const StartDay = ({ setStartDay }) => {
  const dayArray = [
    'Alarm goes of, open eyes, drink coffee',
    'Yoga and green tea',
    'Power walk and smoothie',
    'Not a morning person, talk to me after lunch!'
  ];

  return (
    <div className="survey-item start-day">
      <p className="section-heading">How do you start your day?</p>

      {dayArray.map((item) => (
        <label className="start-day" key={item} htmlFor="startDay">
          <input
            type="radio"
            value={item}
            name="startDay"
            onChange={(event) => setStartDay(event.target.value)}
            Checked={dayArray === item} />
          {item}
        </label>
      ))}
    </div>
  );
};

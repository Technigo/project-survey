import React from 'react';

const activechoice = ['Running 🏃🏻', 'Breathing 🌬', 'Movies 🍿 🎬', 'Not sure 😏'];

export const Activity = ({ activity, setActivity, step }) => {
  return (
    <>
      <div className="activity-container">
        <div className="head">
          <p>Current step: {step} / 7</p>
        </div>
        <h4> Ok, What activity sparks your joy and makes your ears wiggle?
        </h4>
      </div>
      <div className="radio-activity">
        <form>
          {activechoice.map((item) => (
            <label key={item} htmlFor="activeradio">
              <div
                className="radioBtn"
                role="button"
                onClick={(event) => setActivity(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    setActivity(item);
                  }
                }}
                tabIndex={0}>
                <input
                  type="radio"
                  className="radioActiveBtn"
                  onChange={(event) => setActivity(event.target.value)}
                  value={item}
                  checked={activity === item} />
                <span>{item}</span>
              </div>
            </label>
          ))}
        </form>
      </div>
    </>
  );
}
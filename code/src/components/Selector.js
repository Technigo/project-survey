import React from 'react';
/* values */
const howMuch = ['Normal', 'A lot', 'Im extreme'];

export const Selector = ({ select, setSelect, sign }) => {
  return (
    <>
      <div className="howmuch-container">
        <h4> How much {sign} are you?
        </h4>
      </div>
      <div className="radio-activity">
        {howMuch.map((item) => (
          <label key={item} htmlFor="activeradio">
            <div
              className="radioBtn"
              role="button"
              onClick={(event) => setSelect(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setSelect(item);
                }
              }}
              tabIndex={0}>
              <input
                type="radio"
                className="radioActiveBtn"
                onChange={(event) => setSelect(event.target.value)}
                value={item}
                checked={select === item} />
              <span>{item}</span>
            </div>
          </label>
        ))}
      </div>
      <div className="HowMuch">
        {select === 'Normal' && (
          <p> {select} is pretty good too, I guess! 👵🏻</p>
        )}
        {select === 'A lot' && (
          <p> Sugar & spice, {select}, is nice! 🌶🔥</p>
        )}
        {select === 'Im extreme' && (
          <p>The {select}´s turn´s the world upside down. You go you wild thing 😎</p>
        )}
      </div>
    </>
  );
}
/* NR 3 */

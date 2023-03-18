import React from 'react';

const howMuch = ['okey', 'a lot', 'to much', 'im extreme'];

export const Selector = ({ select, setSelect }) => {
  return (
    <>
      <div className="select-container">
        <h4> How much are you?
        </h4>
      </div>
      <div className="radio-activity">
        <form>
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
        </form>
      </div>
    </>
  );
}

/* export const Selector = ({ select, setSelect }) => {
  const howmuch = [
    'Not so much', 'Okey', 'Extreme'
  ];

  return (

    <div className="select-container">
      <p>How much {select} are you?</p>
      <form>
        {howmuch.map((signselector) => (
          <div key={signselector}>
            <div className="signs">
              <input
                type="radio"
                id={select}
                name="zodiac-sign"
                value={select}
                onChange={(event) => setSelect(event.target.value)}
                checked={select === signselector} />
              <label htmlFor={select}>{select}</label>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
} */

/* NR 4 */

/* export const Selector = ({ milk, selector, setSelector }) => {
  const handleSelector = (event) => {
    setSelector(event.target.value);
  }
  return (
    <div className="selector">
      <p>What kind of {milk} are you? </p>
      <input type="text" value={selector} onChange={handleSelector} />
    </div>
  );
} */
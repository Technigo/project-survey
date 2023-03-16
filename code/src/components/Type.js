import React from 'react';

const tvtypes = ['Series', 'Mini-series', 'Documentary', 'Anthology series', 'Surprise me!'];

const Type = ({ type, setType, step }) => {
  console.log('NOW RUNNING TYPE.js')
  console.log('type', type)
  return (
    <div className="container type">
      <h2>Question {step}</h2>
      <h4>What type of series are you in the mood for?</h4>
      <form className="form type">
        <p>Current state: {type}</p>
        {tvtypes.map((item) => (
          <label key={item} htmlFor="radiotype">
            <div
              className="radiobtn"
              role="button"
              onClick={(event) => setType(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setType(item);
                }
              }}
              tabIndex={0}>
              <input
                type="radio"
                id="radiotype"
                className="radiotypebtn"
                onChange={(event) => setType(event.target.value)}
                value={item}
                checked={type === item} />
              <span>{item}</span>
            </div>
          </label>
        ))}
      </form>
    </div>
  );
};

export default Type;

/*
const Type = ({ type, setType, step }) => {

  return (
    <div className="container type">
      <h2>Question {step}</h2>
      <p>What type of series are you in the mood for?</p>
      <p>Current state: {type}</p>
      <form>
        Type:
        {tvtypes.map((group) => (
          <label key={group}>
            <input
              type="radio"
              value={group}
              onChange={(event) => setAgeGroup(event.target.value)}
              checked={ageGroup === group}
            />
            {group}
          </label>
        ))}
      </form>
    </div>
  );
};

 */

/*
const Type = ({ type, setType, step }) => {
  // console.log('{ type, setType, step };', { type, setType, step })
  return (
    <div className="container type">
      <h2>Question {step}</h2>
      <p>What type of series are you in the mood for?</p>
      <form className="form type">
        <p>Current state: {type}</p>
        <select
          onChange={(event) => setType(event.target.value)}
          value={type}>
          <option value="" disabled>Select type:</option>
          <option value="Series">Series</option>
          <option value="Mini-series">Mini-series</option>
          <option value="Documentary">Documentary</option>
          <option value="Anthology series">Anthology series</option>
        </select>
      </form>
    </div>
  );
};

export default Type;
 */

/*
import React from 'react';

const tvtypes = ['Series', 'Mini-series', 'Documentary', 'Anthology series', 'Surprise me!'];

const Type = ({ type, setType, step }) => {
  console.log('NOW RUNNING TYPE.js')
  console.log('type', type)
  return (
    <div className="container type">
      <h2>Question {step}</h2>
      <h4>What type of series are you in the mood for?</h4>
      <form className="form type">
        <p>Current state: {type}</p>
        {tvtypes.map((item) => (
          <label key={item} htmlFor="radiotype">
            <div
              className="radiobtn"
              role="button"
              onClick={(event) => setType(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setType(item);
                }
              }}
              tabIndex={0}>
              <input
                type="radio"
                id="radiotype"
                className="radiotypebtn"
                value={item}
                checked={type === item} />
              <span>{item}</span>
            </div>
          </label>
        ))}
      </form>
    </div>
  );
};

export default Type;
*/
import React, { useState } from 'react';
import Startpage from './components/Startpage';
import Summary from './components/Summary';

const ageGroups = ['1', '2', '3']; /* Input for radio-buttons */

const Buttons = ({ handleNextClick, handleBackClick }) => {
  return (
    <div className="btn">
      <button type="button" onClick={handleBackClick}>👈 Back</button>
      <button type="submit" onClick={handleNextClick}> Next 👉</button>
    </div>
  )
};

export const App = () => {
  const [name, setName] = useState(''); /* Handles name input */
  const [location, setLocation] = useState(''); /* Handles location input */
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  const [ageGroup, setAgeGroup] = useState(''); /* Handles age input */
  const [counter, setCounter] = useState(0); /* Handles survey moving forward */

  const HandleNextClick = () => { setCounter(counter + 1); } /* Handles next button */

  const HandleBackClick = () => { setCounter(counter - 1); } /* Handles back button */

  return (
    <main className="surveyWrapper">
      {counter === 0 && (
        <Startpage startCount={() => setCounter(1)} /> /* Shows startpage of Survey */
      )}
      <form onSubmit={(event) => event.preventDefault()} className="answer">
        {counter === 1 && (
          <label htmlFor="Name"> What is your name?
            <input
              required
              type="text"
              placeholder="Type your name here"
              onChange={(event) => setName(event.target.value)}
              value={name} />
          </label>
        )}
        {counter === 2 && (
          <label htmlFor="Location"> Where do you live?
            <select
              required
              onChange={(event) => setLocation(event.target.value)}
              value={location}>
              <option value="">Select location 👇</option>
              <option value="stockholm">Stockholm</option>
              <option value="barcelona">Barcelona</option>
              <option value="oslo">Oslo</option>
            </select>
          </label>
        )}
        {counter === 3 && (
          <label htmlFor="Newsletter?"> Newsletter?
            <input
              required
              type="checkbox"
              onChange={(event) => setWantsNewsletter(event.target.checked)}
              checked={wantsNewsletter}
              value="Yes" />
          </label>
        )}
        {counter === 4 && (
          <>
            <p className="label">Age Group:</p>
            {ageGroups.map((group) => (
              <label htmlFor="Age group" key={group}>
                <input
                  required
                  type="radio"
                  onChange={(event) => setAgeGroup(event.target.value)}
                  value={group}
                  checked={ageGroup === group} />
                {group}
              </label>
            ))}
          </>
        )}
        {counter >= 1 && counter < 5 && (
          <Buttons handleNextClick={HandleNextClick} handleBackClick={HandleBackClick} />
        )}
      </form>
      {counter === 5 && (
        <>
          <div className="answer">
            <Summary /* Shows summary of Survey */
              nameInput={name}
              locationInput={location}
              newsInput={wantsNewsletter.valueOf}
              ageInput={ageGroup} />
          </div>
          <button type="submit" onClick={() => HandleNextClick()}> Submit</button>
        </>
      )}
      {counter === 6 && (
        <>
          <div className="answer">
            <h2>Thank you!</h2>
          </div>
          <button type="button" onClick={() => setCounter(0)}> Restart</button>
        </>
      )}
    </main>
  )
};

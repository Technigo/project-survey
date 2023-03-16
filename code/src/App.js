import React, { useState } from 'react';
import Startpage from './components/Startpage';
import Summary from './components/Summary';

const Buttons = ({ handleNextClick, handleBackClick }) => {
  return (
    <div className="btn">
      <button type="button" onClick={handleBackClick}>👈 Back</button>
      <button type="submit" onClick={handleNextClick}> Next 👉</button>
    </div>
  )
};

const ageGroups = ['18-25', '25-40', '40-65', '65+']; /* Input for radio-buttons */

export const App = () => {
  const [name, setName] = useState(''); /* Handles name input */
  const [ageGroup, setAgeGroup] = useState(''); /* Handles age input */
  const [location, setLocation] = useState(''); /* Handles location input */
  const [greenArea, setGreenArea] = useState(''); /* Handles grade/range input */
  const [feedback, setFeedback] = useState(''); /* Handles feedback input */
  const [counter, setCounter] = useState(0); /* Handles survey moving forward */

  const HandleNextClick = () => { setCounter(counter + 1); } /* Handles next button */
  const HandleBackClick = () => { setCounter(counter - 1); } /* Handles back button */

  return (
    <main className="surveyWrapper">
      {counter === 0 && (
        /* Shows startpage of Survey */
        <Startpage startCount={() => setCounter(1)} />
      )}
      <form onSubmit={(event) => event.preventDefault()} className="answer">
        {counter === 1 && (
          <label htmlFor="Name"> What is your name?
            <input
              type="text"
              placeholder="Type your name here"
              onChange={(event) => setName(event.target.value)}
              value={name} />
          </label>
        )}
        {counter === 2 && (
          <>
            <p className="label">How old are you?</p>
            {ageGroups.map((group) => (
              <label htmlFor="Age group" className="ageGroup" key={group}>
                <input
                  type="radio"
                  onChange={(event) => setAgeGroup(event.target.value)}
                  value={group}
                  checked={ageGroup === group} />
                {group}
              </label>
            ))}
          </>
        )}
        {counter === 3 && (
          <label htmlFor="Location"> Where do you live?
            <select
              onChange={(event) => setLocation(event.target.value)}
              value={location}>
              <option value="">Select location 👇</option>
              <option value="city">Inner city of Stockholm</option>
              <option value="south">South of city center</option>
              <option value="east">East of city center</option>
              <option value="west">West of city center</option>
              <option value="north">North of city center</option>
            </select>
          </label>
        )}
        {counter === 4 && (
          <label htmlFor="scale?"> On a scale from 0-10, how green is your area?
            <input
              type="range"
              min="0"
              max="10"
              onChange={(event) => setGreenArea(event.target.value)} />
          </label>
        )}
        {counter === 5 && (
          <label htmlFor="feedback"> What type of green areas would you like to have more of?
            <input
              type="text"
              size="100"
              placeholder="Type here.."
              onChange={(event) => setFeedback(event.target.value)}
              value={feedback} />
          </label>
        )}
      </form>
      {counter >= 1 && counter < 6 && (
        <Buttons handleNextClick={HandleNextClick} handleBackClick={HandleBackClick} />
      )}
      <div className="answer">
        {counter === 6 && (
        /* Shows summary of Survey */
          <Summary
            nameInput={name}
            ageInput={ageGroup}
            locationInput={location}
            greenInput={greenArea}
            feedbackInput={feedback}
            submitBtn={() => HandleNextClick()} />
        )}
        {counter === 7 && (
        /* Shows last page of Survey */
          <>
            <h2>Thank you!</h2>
            <button type="button" onClick={() => window.location.reload()}> Restart</button>
          </>
        )}
      </div>
    </main>
  )
};

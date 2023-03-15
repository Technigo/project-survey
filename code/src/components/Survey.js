import React, { useState } from 'react';
import Startpage from './Startpage';
import Summary from './Summary';

const ageGroups = ['1', '2', '3'];

const Survey = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  const [ageGroup, setAgeGroup] = useState('');
  const [counter, setCounter] = useState(0);

  return (
    <section className="surveyWrapper">
      {counter === 0 && (
        <Startpage startCount={() => setCounter(1)} />
      )}
      {counter === 1 && (
        <>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="answer">
            <label htmlFor="Name">
            What is your name?
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name} />
            </label>
          </form>
          <button
            type="button"
            onClick={() => setCounter(2)}>
            Next 👉
          </button>
        </>
      )}
      {counter === 2 && (
        <>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="answer">
            <label htmlFor="Location">
              Where do you live?
              <select
                onChange={(event) => setLocation(event.target.value)}
                value={location}>
                <option value="">Select location</option>
                <option value="stockholm">Stockholm</option>
                <option value="barcelona">Barcelona</option>
                <option value="oslo">Oslo</option>
              </select>
            </label>
          </form>
          <button
            type="button"
            onClick={() => setCounter(3)}>
            Next 👉
          </button>
        </>
      )}
      {counter === 3 && (
        <>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="answer">
            <label htmlFor="Newsletter?">
              Newsletter?
              <input
                type="checkbox"
                onChange={(event) => setWantsNewsletter(event.target.checked)}
                checked={wantsNewsletter}
                value="Yes" />
            </label>
          </form>
          <button
            type="button"
            onClick={() => setCounter(4)}>
            Next 👉
          </button>
        </>
      )}
      {counter === 4 && (
        <>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="answer">
            {ageGroups.map((group) => (
              <label htmlFor="Age group:" key={group}>
                <input
                  type="radio"
                  onChange={(event) => setAgeGroup(event.target.value)}
                  value={group}
                  checked={ageGroup === group} />
                {group}
              </label>
            ))}
          </form>
          <button
            type="button"
            onClick={() => setCounter(5)}>
            Next 👉
          </button>
        </>
      )}
      {counter === 5 && (
        <>
          <div className="answer">
            <Summary
              nameInput={name}
              locationInput={location}
              newsInput={wantsNewsletter.valueOf}
              ageInput={ageGroup} />
          </div>
          <button
            type="button"
            onClick={() => setCounter(6)}>
            Submit
          </button>
        </>
      )}
      {counter === 6 && (
        <>
          <div className="answer">
            <h2>Thank you!</h2>
          </div>
          <button
            type="button"
            onClick={() => setCounter(0)}>
            Restart
          </button>
        </>
      )}
    </section>
  )
};

export default Survey;
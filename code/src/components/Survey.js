import React, { useState } from 'react';

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
        <div>
          <h2>Hello dear user!</h2>
          <p>Click the button below to start the survey.</p>
          <button
            type="button"
            onClick={() => setCounter(1)}>
            Start quiz
          </button>
        </div>
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
            Next
          </button>
        </>
      )}
      {counter === 2 && (
        <>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="answer">
            <select
              onChange={(event) => setLocation(event.target.value)}
              value={location}>
              <option value="">Select location</option>
              <option value="stockholm">Stockholm</option>
              <option value="barcelona">Barcelona</option>
              <option value="oslo">Oslo</option>
            </select>
          </form>
          <button
            type="button"
            onClick={() => setCounter(3)}>
            Next
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
                checked={wantsNewsletter}
                onChange={(event) => setWantsNewsletter(event.target.checked)} />
            </label>
          </form>
          <button
            type="button"
            onClick={() => setCounter(4)}>
            Next
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
                  value={group}
                  onChange={(event) => setAgeGroup(event.target.value)}
                  checked={ageGroup === group} />
                {group}
              </label>
            ))}
          </form>
          <button
            type="button"
            onClick={() => setCounter(4)}>
            Next
          </button>
        </>
      )}
    </section>
  )
};

export default Survey;
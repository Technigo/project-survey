import React, { useState } from 'react';
import 'styles/form.css';

const ageGroups = ['15-25', '26-35', '36-45', '46-55', '56-65', 'Secret!'];

const Form = () => {
  const [name, setName] = useState('');
  const [ageGroup, setAgeGroup] = useState();
  const [skills, setSkills] = useState();

  return (
    <section className="form__wrapper">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {/* Question 1 */}
        <article className="form__question__1 question__wrapper">
          <label>
            <p className="form__question">Hello there, what's your name?</p>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="form__input"
              placeholder="Type your name here please.."
              required
            />
          </label>
        </article>

        {/* Question 2 */}
        <article className="form__question__2 question__wrapper">
          <p className="form__question">And may I ask how old are you?</p>
          {ageGroups.map((group) => (
            <label key={group}>
              <input
                type="radio"
                value={group}
                onChange={(event) => setAgeGroup(event.target.value)}
                checked={ageGroup === group}
                className="form__radiobutton"
              />
              <span className="form__radiobutton__input">{group}</span>
            </label>
          ))}
        </article>

        {/* Question 3 */}
        <article className="form__question__3 question__wrapper">
          <p className="form__question">
            Which parts of developing would you say is the most important to a
            front-end developer? (Pick 3)
          </p>
          <label>
            Vanilla JS
            <input
              type="checkbox"
              value="Vanilla-JS"
              checked={skills}
              onChange={(event) => setSkills(event.target.value)}
              className="form__checkboxes"
            />
          </label>
        </article>
      </form>

      {name !== '' ? <p>HELLO</p> : ''}
    </section>
  );
};

export default Form;

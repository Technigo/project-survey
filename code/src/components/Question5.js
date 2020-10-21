import React from 'react';

const Question5 = (props) => {
  const handleTitleChange = (event) => {
    props.setTitle(event.target.value);
  };

  return (
    <article className="form__question__1 question__wrapper">
      <label htmlFor="name" className="form__question">
        And just out of curiosity, what kind of developer are you?
      </label>
      <select
        className="form__dropdown"
        value={props.title}
        onChange={handleTitleChange}
      >
        <option value="">Choose title...</option>
        <option value="Frontend Developer">Front-end Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Devops Developer">DevOps Developer</option>
        <option value="App Developer">App Developer</option>
        <option value="Game Developer">Game Developer</option>
        <option value="Other type of Developer">Other type of developer</option>
        <option value="Not a Developer">Im not a developer!</option>
        <option value="Recruiter">I'm a recruiter.. Schh!</option>
      </select>

      <button type="submit" value="Submit" className="form__submit-button">
        Submit
      </button>
    </article>
  );
};
export default Question5;

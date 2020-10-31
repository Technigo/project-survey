import React from 'react';
import PreviousButton from 'components/PreviousButton';
import SubmitButton from 'components/SubmitButton';
import ProgressBar from 'components/ProgressBar';

const Question5 = ({
  title,
  setTitle,
  section,
  setSection,
  name,
  ageGroup,
  skills,
  suggestions,
}) => {
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <article className="form__question__5">
      {/* Question */}
      <label htmlFor="title" className="form__question" tabIndex="0">
        And just out of curiosity, what kind of developer are you?
      </label>

      {/* Input */}
      <div className="question__content-wrapper">
        <select
          id="title"
          className="form__dropdown"
          value={title}
          onChange={handleTitleChange}
        >
          <option value="">Choose title...</option>
          <option value="Frontend Developer">Front-end Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Devops Developer">DevOps Developer</option>
          <option value="App Developer">App Developer</option>
          <option value="Game Developer">Game Developer</option>
          <option value="Other type of Developer">Other</option>
          <option value="Not a Developer">Im not a developer!</option>
          <option value="Recruiter">I'm a recruiter.. Schh!</option>
        </select>
      </div>

      {/* Navigation buttons */}
      <div className="buttons__wrapper">
        <PreviousButton
          whatQuestionPrevious="fourthQuestion"
          section={section}
          setSection={setSection}
        />
        <ProgressBar
          firstDot="progress dot_000"
          secondDot="progress dot_000"
          thirdDot="progress dot_000"
          fourthDot="progress dot_000"
          fifthDot="progress dot_000"
        />
        <SubmitButton
          setSection={setSection}
          currentState={title}
          defaultState=""
          message="Oops! You forgot to select a job 😬"
          name={name}
          ageGroup={ageGroup}
          skills={skills}
          suggestions={suggestions}
          title={title}
        />
      </div>
    </article>
  );
};
export default Question5;

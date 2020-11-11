import React from 'react';

// Components
import NextButton from 'components/NextButton';
import PreviousButton from 'components/PreviousButton';
import ProgressBar from 'components/ProgressBar';
import Popup from 'components/Popup';

// ----------------------------------------------------------------

const QuestionCheckboxesSkills = ({
  skills,
  setSkills,
  section,
  setSection,
}) => {
  const handleSkillsChange = (skillValue) => {
    if (skills.includes(skillValue)) {
      setSkills(skills.filter((item) => item !== skillValue));
    } else {
      setSkills([...skills, skillValue]);
    }
  };

  const skillsGroup = [
    'HTML5',
    'CSS3',
    'Vanilla JS',
    'React + JSX',
    'Other framework',
    'Typescript',
    'PHP',
    'CMS-management',
    'Algorithms',
  ];

  return (
    <article className="form__question__3">
      {/* Question */}
      <p className="form__question" tabIndex="0">
        What is the most important to a Front-end Developer? (Pick 3!)
      </p>

      {/* Input */}
      <div className="question__content-wrapper align-content">
        {skillsGroup.map((skill) => (
          <span className="form__checkbox__question-wrapper" key={skill}>
            <label htmlFor={skill}>{skill}</label>
            <input
              id={skill}
              type="checkbox"
              className="form__checkbox"
              checked={skills.includes(skill)}
              onChange={() => handleSkillsChange(skill)}
            />
          </span>
        ))}
        {skills.length > 3 && (
          <Popup
            message="Oops, you can only select 3!"
            classNames="form__popup bigger-margin"
          />
        )}
      </div>
      {/* Navigation buttons */}
      <div className="buttons__wrapper">
        <PreviousButton
          whatQuestionPrevious="secondQuestion"
          section={section}
          setSection={setSection}
        />
        <ProgressBar
          firstDot="progress dot_000"
          secondDot="progress dot_000"
          thirdDot="progress dot_000"
          fourthDot="progress dot_fff"
          fifthDot="progress dot_fff"
        />
        <NextButton
          whatQuestionNext="fourthQuestion"
          section={section}
          setSection={setSection}
          currentState={skills.length}
          defaultState={0}
          message="Please select some skills first"
        />
      </div>
    </article>
  );
};
export default QuestionCheckboxesSkills;

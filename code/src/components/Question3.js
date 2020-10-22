import React from 'react';
import NextButton from 'components/NextButton.js';
import PreviousButton from 'components/PreviousButton.js';
import ProgressBar from 'components/ProgressBar.js';

const Question3 = ({ skills, setSkills, section, setSection }) => {
  const handleSkillsChange = (skillValue) => {
    skills.includes(skillValue)
      ? setSkills(skills.filter((item) => item !== skillValue))
      : setSkills([...skills, skillValue]);
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
      <p className="form__question">
        What would you say is the most important to a Front-end Developer?
      </p>

      {/* Input */}
      <div className="question__content-wrapper">
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
        />
      </div>
    </article>
  );
};
export default Question3;

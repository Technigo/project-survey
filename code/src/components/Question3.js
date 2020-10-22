import React from 'react';
import NextButton from 'components/NextButton.js';
import PreviousButton from 'components/PreviousButton.js';
import ProgressBar from 'components/ProgressBar.js';

const Question3 = (props) => {
  const handleSkillsChange = (skillValue) => {
    props.skills.includes(skillValue)
      ? props.setSkills(props.skills.filter((item) => item !== skillValue))
      : props.setSkills([...props.skills, skillValue]);
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
          <span className="form__checkbox__question-wrapper">
            <label htmlFor={skill}>{skill}</label>
            <input
              id={skill}
              type="checkbox"
              className="form__checkbox"
              checked={props.skills.includes(skill)}
              onChange={() => handleSkillsChange(skill)}
            />
          </span>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="buttons__wrapper">
        <PreviousButton
          whatQuestionPrevious="secondQuestion"
          section={props.section}
          setSection={props.setSection}
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
          section={props.section}
          setSection={props.setSection}
        />
      </div>
    </article>
  );
};
export default Question3;

import React, { useState } from 'react';
import NextButton from 'components/NextButton';
import PreviousButton from 'components/PreviousButton';
import ProgressBar from 'components/ProgressBar';
import Popup from 'components/Popup';

const Question3 = ({ skills, setSkills, section, setSection }) => {
  const [popup, setPopup] = useState('hidden');

  const handleSkillsChange = (skillValue) => {
    skills.includes(skillValue)
      ? setSkills(skills.filter((item) => item !== skillValue))
      : setSkills([...skills, skillValue]);
    skills.length >= 3 ? setPopup('showing') : setPopup('hidden');
  };

  // controlAmount();
  console.log(skills);

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
        What would you say is the most important to a Front-end Developer? (Pick
        3!)
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
        {popup === 'showing' && <Popup />}
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

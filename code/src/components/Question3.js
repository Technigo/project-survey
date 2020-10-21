import React from 'react';
import NextButton from 'components/NextButton.js';

const Question3 = (props) => {
  const handleSkillsChange = (skillValue) => {
    props.skills.includes(skillValue)
      ? props.setSkills(props.skills.filter((item) => item !== skillValue))
      : props.setSkills([...props.skills, skillValue]);
  };

  return (
    <article className="form__question__3 question__wrapper">
      <p className="form__question">
        Which parts of developing would you say is the most important to a
        front-end developer? (Pick only 3)
      </p>
      <div className="all-labels__wrapper">
        <label htmlFor="html">HTML</label>
        <input
          id="html"
          type="checkbox"
          className="form__checkbox"
          checked={props.skills.includes('HTML')}
          onChange={() => handleSkillsChange('HTML')}
        />
        <label htmlFor="css">CSS</label>
        <input
          id="css"
          type="checkbox"
          className="form__checkbox"
          checked={props.skills.includes('CSS')}
          onChange={() => handleSkillsChange('CSS')}
        />
        <label htmlFor="vanilla">Vanilla JS</label>
        <input
          id="vanilla"
          type="checkbox"
          className="form__checkbox"
          checked={props.skills.includes('Vanilla JS')}
          onChange={() => handleSkillsChange('Vanilla JS')}
        />
        <label htmlFor="react">React</label>
        <input
          id="react"
          type="checkbox"
          className="form__checkbox"
          checked={props.skills.includes('React')}
          onChange={() => handleSkillsChange('React')}
        />
        <label htmlFor="typescript">Typescript</label>
        <input
          id="typescript"
          type="checkbox"
          className="form__checkbox"
          checked={props.skills.includes('Typescript')}
          onChange={() => handleSkillsChange('Typescript')}
        />
      </div>
      <NextButton
        whatQuestionNext="fourthQuestion"
        section={props.section}
        setSection={props.setSection}
      />
    </article>
  );
};
export default Question3;

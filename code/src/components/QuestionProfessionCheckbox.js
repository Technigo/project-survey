import React from 'react';

//import SubmitButton from './SubmitButton'
//import PreviousButton from './PreviousButton'
import Popup from './Popup'


const QuestionProfessionCheckbox = ({
  professions,
  setProfessions,
  page,
  setPage,
}) => {
  const onProfessionChange = (professionValue) => {
    if (professions.includes(professionValue)) {
      setProfessions(professions.filter((item) => item !== professionValue));
    } else {
      setProfessions([...professions, professionValue]);
    }
  };

  const professionGroup = [
    'Public sector',
    'Private sector',
    'Arts, Crafts & Architecture',
    'Media & Communication',
    'Recruitment',
    'Tech & IT',
    'Academia',
    'Design',
    'Hospitality and Tourism',
    'Education',
    'Science, Engineering and Mathematics',
    'Agriculture, Food and Natural Resources',
    'Manufacturing',
    'Experience economy sector'
  ];
//take away pick 2 later???
  return (
    <article className="form-question-5">
      {/* Q */}
      <p className="form-question" tabIndex="0">
        What kind of profession do you associate yourself with? (Please pick 2 as they are made to overlap a little! 😉)
      </p>

      {/* A */}
      <div className="question-content-container">
        {professionGroup.map((profession) => (
          <span className="form-checkbox-question-container" key={profession}>
            <label htmlFor={profession}>{profession}</label>
            <input
              id={profession}
              type="checkbox"
              className="form-checkbox"
              checked={professions.includes(profession)}
              onChange={() => onProfessionChange(profession)}
            />
          </span>
        ))}
        {professions.length > 2 && (
          <Popup
            message="Please try again, you can only select 2!"
            classNames="form-popup-with-bigger"
          />
        )}
      </div>
      {/* Navigation buttons ---> ToDO: add Submit and Previous button*/}
      <div className="buttons__wrapper">

      </div>
    </article>
  );
};
export default QuestionProfessionCheckbox;
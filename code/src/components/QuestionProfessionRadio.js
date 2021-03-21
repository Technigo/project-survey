import React from 'react'

import NextQuestionButton from './NextQuestionButton'

const QuestionProfessionRadio = ({
  profession,
  setProfession,
  page,
  setPage,
  handleSubmit
}) => {
  const onProfessionChange = (e) => {
    setProfession(e.target.value)
  }

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
  ]
  
  return (
    <article className="form-question">
      {/* Q */}
      <p htmlFor="professions" className="form-question" tabIndex="0">
        What kind of profession do you associate yourself with?
      </p>

      {/* A */}
      <div className="question-content-container-5">
        {professionGroup.map((professions) => (
          <span key={professions} className="form-radiobuttons">
            <input
              name="user-choice-profession"
              id={professions}
              type="radio"
              value={professions}
              onChange={onProfessionChange}
              //checked={profession === professions}
              className="form-radiobuttons"
            />
            <label htmlFor={professions} aria-label={professions} tabIndex="0">
              <span className="form-radiobutton-input">{professions}</span>
            </label>
          </span>
        ))}
      </div>
      <div className="buttons-container-4">
        <NextQuestionButton
          page={page}
          setPage={setPage}
          currentState={profession}
          defaultState={undefined}
          message="Please choose your profession first!"
          onSubmit={handleSubmit}	
          button="Submit button"
          buttontext="Submit"
        />
      </div>
    </article>
  )
}

export default QuestionProfessionRadio

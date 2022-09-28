import React from 'react';

const SixthQuestion = ({
  goalInput,
  onGoalInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  return (
    <form className="question-wrap">
      <div className="question">
        <p className="question-title">What do you want to focus most on today</p>
        <p className="question-specify">choose one main goal for today</p>
      </div>
      <select
        className="select-input"
        type="text"
        value={goalInput}
        onChange={onGoalInputChange}
        required="required">
        <option value=""> Please select a goal </option>
        <option value="Fresher"> Fresher Feeling </option>
        <option value="Education"> Education and instructions </option>
        <option value="Brighter"> Brighter smile </option>
        <option value="TreatmentPlan"> Peronalized treatment plan</option>
        <option value="NoFocus"> I don´t have any special focus today </option>

      </select>
      <div className="button-container">
        <button type="button" className="back" onClick={onPreviousQuestionChange}>
          BACK
        </button>
        <button type="button" className="forward" onClick={onNextQuestionChange}>
          FORWARD
        </button>
      </div>
    </form>
  )
}
export default SixthQuestion
import React from 'react';
import ProgressBar from './ProgressBar';

const barData = [
  { bgcolor: '#b62e88', completed: 84 }
];

const SixthQuestion = ({
  goalInput,
  onGoalInputChange,
  onPreviousQuestionChange,
  onNextQuestionChange
}) => {
  return (
    <form className="question-wrap">
      <div className="progressbar">
        {barData.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        ))}
      </div>
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
        <option value=""> Please select a goal 👇🏿 </option>
        <option value="a fresher feeling"> Fresher Feeling 🧖 </option>
        <option value="to focus on education"> Education and instructions 📚 </option>
        <option value="a brighter smile"> Brighter smile 💎</option>
        <option value="to work on your treatment plan"> Peronalized treatment plan 🔮</option>
        <option value="a nice treatment"> I don´t have any special focus today 💁 </option>

      </select>
      <div className="button-container">
        <button type="button" className="back" onClick={onPreviousQuestionChange}>
          BACK
        </button>
        <button type="button" className="forward" onClick={onNextQuestionChange}>
        NEXT
        </button>
      </div>
    </form>
  )
}
export default SixthQuestion
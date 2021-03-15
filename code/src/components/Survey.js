import React from 'react'
import './survey.css'

const Survey = () => {
 // const [newQuestion, setNewQuestion] = useState();
  return (
    <>
      <section className="survey-container">
        <label>
          What is your name or nickname?
          <input type="text" name="name" />
        </label>
        <button>Click to select week</button>
      </section>
    </>
  );
};

export default Survey
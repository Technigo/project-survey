import { useState } from "react";
import React from "react";

const SecondQuestion = () => {
  const [question, setQuestion] = useState("");
  return (
    <div className="QuestionContainer">
      <p>Who is your favourite queen?</p>
      <div className="selectForm">
        <form>
          <select
            onChange={(event) => setQuestion(event.target.value)}
            value={question}
          >
            <option>Bimini Bon Boulash</option>
            <option>Tayce</option>
            <option>Aquaria</option>
            <option>Gottmik</option>
            <option>Kandy Muse</option>
            <option>Krystal Methyd</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SecondQuestion;

import React from 'react';
import ButtonStart from './Buttons/ButtonStart';

const QuestionOne = ({ handleStepIncrease }) => {
  return (
    <section className="intro-wrapper">
      <p className="header-paragraph"><span className="size1">Astral Escapes</span> is a space tourism company that offers <span className="color2">once-in-a-lifetime</span> trips to space for <span className="color3">adventure seekers</span> and space enthusiasts.
      </p>
      <p className="header-paragraph"> Click below to book your trip!
      </p>
      <ButtonStart onClick={handleStepIncrease} />
    </section>
  );
};

export default QuestionOne;
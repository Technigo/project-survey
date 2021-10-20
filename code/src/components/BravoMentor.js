import React from "react";
import "./bravoMentor.css";

const BravoMentor = ({ bravo, onStepChange }) => {
  return (
    <div className="question-container">
      <h2 className="question-title">
        Since getting into reality can be quite daunting. So you get to choose
        your mentor:
      </h2>
      <form className="bravomentor">
        <span class="mentorcardbox">
          <input
            className="mentorcard"
            type="image"
            src="pictures/Erika-Jayne.jpeg"
            alt="erika jayne"
            value={bravo}
            onClick={onStepChange}
          />
          <p className="mentorcard-text">
            <b>Erika Jayne:</b> The queen of fabulous. Having zero fucks to
            give.
          </p>
        </span>
        <span class="mentorcardbox">
          <input
            className="mentorcard"
            type="image"
            src="pictures/tom-schwartz.png"
            alt="tom schwartz"
            value="Tom Schwartz"
            onClick={onStepChange}
          />
          <p className="mentorcard-text">
            <b>Tom Schwartz:</b> Everyone loves Schwartzie. However making
            decisions are not his thing. But with a partner who can play the bad
            cop, Tom is golden!
          </p>
        </span>
        <span class="mentorcardbox">
          <input
            className="mentorcard"
            type="image"
            src="pictures/kate-chastain.jpeg"
            alt="kate chastain"
            value="Kate Chastain"
            onClick={onStepChange}
          />
          <p className="mentorcard-text">
            <b>Kate Chastain:</b> Has served every celebreity there is. Master
            of resting bitchface and can make every cocktail there is and earn
            the biggest tip of the season.
          </p>
        </span>
        <span class="mentorcardbox">
          <input
            className="mentorcard"
            type="image"
            src="pictures/craig-conover.jpg"
            alt="craig conover"
            value="Craig Conover"
            onClick={onStepChange}
          />
          <p className="mentorcard-text">
            <b>Craig Conover:</b> The southern gentelman and entrepreneur who
            built an empire of pillows. You like to party, flirt and make money
            while still being polite? Craig's your man!
          </p>
        </span>
      </form>
    </div>
  );
};

export default BravoMentor;

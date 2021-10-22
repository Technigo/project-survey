import React from "react";
import "./bravoMentor.css";

const Mentors = ({
  mentor,
  onMentorChange,
  onStepChange,
  onStepBackChange,
}) => {
  return (
    <div className="question-container">
      <h2 className="question-title">
        Since getting into reality can be quite daunting you get to choose your
        mentor:
      </h2>
      <form>
        <div className="bravomentor">
          <label className="mentorcardbox">
            <input
              type="checkbox"
              value="Erika Jayne"
              onChange={(event) =>
                onMentorChange(event, "./pictures/Erika-Jayne.jpeg")
              }
              checked={mentor === "Erika Jayne"}
            />
            <span role="img" aria-label="mentor">
              <img
                className="mentorcard"
                src="./pictures/Erika-Jayne.jpeg"
                alt="Erika Jayne"
              />
              <p className="mentorcard-text">
                <b>Erika Jayne:</b> The queen of fabulous. Having zero fucks to
                give.
              </p>
            </span>
          </label>

          <label className="mentorcardbox">
            <input
              type="checkbox"
              value="Tom Schwartz"
              onChange={(event) =>
                onMentorChange(event, "./pictures/tom-schwartz.png")
              }
              checked={mentor === "Tom Schwartz"}
            />
            <span role="img" aria-label="mentor">
              <img
                className="mentorcard"
                src="./pictures/tom-schwartz.png"
                alt="Tom Schwartz"
              />
              <p className="mentorcard-text">
                <b>Tom Schwartz:</b> Everyone loves Schwartzie. However making
                decisions are not his thing. But with a partner who can play the
                bad cop, Tom is golden!
              </p>
            </span>
          </label>

          <label className="mentorcardbox">
            <input
              type="checkbox"
              value="Kate Chastain"
              onChange={(event) =>
                onMentorChange(event, "./pictures/kate-chastain.jpeg")
              }
              checked={mentor === "Kate Chastain"}
            />
            <span role="img" aria-label="mentor">
              <img
                className="mentorcard"
                src="./pictures/kate-chastain.jpeg"
                alt="Kate Chastain"
              />
              <p className="mentorcard-text">
                <b>Kate Chastain:</b> Has served every celebrity there is.
                Master of resting bitch face and can make every cocktail there
                is and earn the biggest tip of the season.
              </p>
            </span>
          </label>

          <label className="mentorcardbox">
            <input
              type="checkbox"
              value="Craig Conover"
              onChange={(event) =>
                onMentorChange(event, "./pictures/craig-conover.jpg")
              }
              checked={mentor === "Craig Conover"}
            />
            <span role="img" aria-label="mentor">
              <img
                className="mentorcard"
                src="./pictures/craig-conover.jpg"
                alt="Craig Conover"
              />
              <p className="mentorcard-text">
                <b>Craig Conover:</b> The southern gentleman and entrepreneur
                who built an empire of pillows. You like to party, flirt and
                make money while still being polite? Craig's your man!
              </p>
            </span>
          </label>
        </div>

        <div className="button-box">
          <button className="next-button" onClick={onStepBackChange}>
            ← Go back?
          </button>
          <button className="next-button" onClick={onStepChange}>
            Results →
          </button>
        </div>
      </form>
    </div>
  );
};

export default Mentors;

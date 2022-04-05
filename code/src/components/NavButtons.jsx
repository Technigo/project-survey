import React from "react";
import SubmitButton from "./SubmitButton";
import forwardButton from "../assets/next.png";
import backButton from "../assets/previous.png";
import restartButton from "../assets/replay.png";

const refreshPage = () => {
  window.location.reload();
};

const leftAlign = {
  justifyContent: "flex-end",
};

const NavButtons = ({
  pageNumber,
  setPageNumber,
  error,
  setError,
  name,
  gender,
  age,
  tipiq1Answer,
  tipiq2Answer,
  tipiq3Answer,
  tipiq4Answer,
  tipiq5Answer,
  tipiq6Answer,
  tipiq7Answer,
  tipiq8Answer,
  tipiq9Answer,
  tipiq10Answer,
  tiviq1Answer,
  tiviq2Answer,
  tiviq3Answer,
  tiviq4Answer,
  tiviq5Answer,
  tiviq6Answer,
  tiviq7Answer,
  tiviq8Answer,
  tiviq9Answer,
  tiviq10Answer,
  tiviq11Answer,
  tiviq12Answer,
  tiviq13Answer,
  tiviq14Answer,
  tiviq15Answer,
  tiviq16Answer,
  tiviq17Answer,
  tiviq18Answer,
  tiviq19Answer,
  tiviq20Answer,
}) => {
  // Huge long IF statement for validation (there's probably a better way of doing this...)
  const pageForward = () => {
    if (pageNumber === 1 && name.length === 0) {
      setError("Please fill in the required fields.");
      setPageNumber(1);
    } else if (pageNumber === 2 && gender === "") {
      setError("Please fill in the required fields.");
      setPageNumber(2);
    } else if (pageNumber === 3 && age === "") {
      setError("Please fill in the required fields.");
      setPageNumber(3);
    } else if (
      pageNumber === 4 &&
      (tipiq1Answer === "default" ||
        tipiq2Answer === "default" ||
        tipiq3Answer === "default" ||
        tipiq4Answer === "default" ||
        tipiq5Answer === "default" ||
        tipiq6Answer === "default" ||
        tipiq7Answer === "default" ||
        tipiq8Answer === "default" ||
        tipiq9Answer === "default" ||
        tipiq10Answer === "default")
    ) {
      setError("Please fill in the required fields.");
      setPageNumber(4);
    } else if (
      pageNumber === 6 &&
      (tiviq1Answer === "default" ||
        tiviq2Answer === "default" ||
        tiviq3Answer === "default" ||
        tiviq4Answer === "default" ||
        tiviq5Answer === "default" ||
        tiviq6Answer === "default" ||
        tiviq7Answer === "default" ||
        tiviq8Answer === "default" ||
        tiviq9Answer === "default" ||
        tiviq10Answer === "default")
    ) {
      setError("Please fill in the required fields.");
      setPageNumber(6);
    } else if (
      pageNumber === 7 &&
      (tiviq11Answer === "default" ||
        tiviq12Answer === "default" ||
        tiviq13Answer === "default" ||
        tiviq14Answer === "default" ||
        tiviq15Answer === "default" ||
        tiviq16Answer === "default" ||
        tiviq17Answer === "default" ||
        tiviq18Answer === "default" ||
        tiviq19Answer === "default" ||
        tiviq20Answer === "default")
    ) {
      setError("Please fill in the required fields.");
      setPageNumber(7);
    } else {
      setError("noError");
      window.scrollTo(0, 0);
      setPageNumber(pageNumber + 1);
    }
  };

  const pageBackward = () => {
    window.scrollTo(0, 0);
    setPageNumber(pageNumber - 1);
  };

  if (pageNumber === 0) {
    return (
      <div className="nav-buttons next" style={leftAlign}>
        <button onClick={pageForward}>
          <img
            className="navbutton-icon"
            src={forwardButton}
            alt="forward button"
          />
        </button>
      </div>
    );
  } else {
    return (
      <div className="nav-buttons">
        {pageNumber > 0 && pageNumber <= 9 && (
          <button onClick={pageBackward}>
            <img
              className="navbutton-icon back"
              src={backButton}
              alt="back button"
            />
          </button>
        )}
        {pageNumber > 0 && pageNumber < 7 && (
          <button onClick={pageForward}>
            <img
              className="navbutton-icon next"
              src={forwardButton}
              alt="forward button"
            />
          </button>
        )}
        {pageNumber === 7 && (
          <SubmitButton
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            error={error}
            setError={setError}
            name={name}
            gender={gender}
            age={age}
            tipiq1Answer={tipiq1Answer}
            tipiq2Answer={tipiq2Answer}
            tipiq3Answer={tipiq3Answer}
            tipiq4Answer={tipiq4Answer}
            tipiq5Answer={tipiq5Answer}
            tipiq6Answer={tipiq6Answer}
            tipiq7Answer={tipiq7Answer}
            tipiq8Answer={tipiq8Answer}
            tipiq9Answer={tipiq9Answer}
            tipiq10Answer={tipiq10Answer}
            tiviq1Answer={tiviq1Answer}
            tiviq2Answer={tiviq2Answer}
            tiviq3Answer={tiviq3Answer}
            tiviq4Answer={tiviq4Answer}
            tiviq5Answer={tiviq5Answer}
            tiviq6Answer={tiviq6Answer}
            tiviq7Answer={tiviq7Answer}
            tiviq8Answer={tiviq8Answer}
            tiviq9Answer={tiviq9Answer}
            tiviq10Answer={tiviq10Answer}
            tiviq11Answer={tiviq11Answer}
            tiviq12Answer={tiviq12Answer}
            tiviq13Answer={tiviq13Answer}
            tiviq14Answer={tiviq14Answer}
            tiviq15Answer={tiviq15Answer}
            tiviq16Answer={tiviq16Answer}
            tiviq17Answer={tiviq17Answer}
            tiviq18Answer={tiviq18Answer}
            tiviq19Answer={tiviq19Answer}
            tiviq20Answer={tiviq20Answer}
          />
        )}
        {pageNumber === 8 && (
          <button onClick={pageForward}>
            <img
              className="navbutton-icon next"
              src={forwardButton}
              alt="forward button"
            />
          </button>
        )}
        {pageNumber === 9 && (
          <button onClick={refreshPage}>
            <img
              className="navbutton-icon restart"
              src={restartButton}
              alt="restart button"
            />
          </button>
        )}
      </div>
    );
  }
};

export default NavButtons;

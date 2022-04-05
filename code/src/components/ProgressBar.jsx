import React from "react";
import NavButtons from "./NavButtons";

const ProgressBar = ({
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
  let completed = (pageNumber * 100) / 9;
  const progressStatus = {
    width: `${completed}%`,
  };
  return (
    <div className="progress-container">
      <NavButtons
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
      <div className="progress-bar" style={progressStatus}></div>
    </div>
  );
};

export default ProgressBar;

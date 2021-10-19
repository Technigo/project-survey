import React, { useState } from "react";

import Name from "./components/Name";
import Experience from "./components/Experience";
import Radios from "./components/Radios";
import Rating from "./components/Rating";
import Summary from "./components/Summary";

export const App = () => {
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [theatreVisits, setTheatreVisits] = useState("");
  const [rating, setRating] = useState(0);
  const [question, setQuestion] = useState(1);
  const [progress, setProgress] = useState(0);

  if (question === 1) {
    return (
      <Name
        name={name}
        setName={setName}
        question={question}
        setQuestion={setQuestion}
        progress={progress}
        setProgress={setProgress}
      />
    );
  } else if (question === 2) {
    return (
      <Experience
        experience={experience}
        setExperience={setExperience}
        question={question}
        setQuestion={setQuestion}
        progress={progress}
        setProgress={setProgress}
      />
    );
  } else if (question === 3) {
    return (
      <Radios
        theatreVisits={theatreVisits}
        setTheatreVisits={setTheatreVisits}
        question={question}
        setQuestion={setQuestion}
        progress={progress}
        setProgress={setProgress}
      />
    );
  } else if (question === 4) {
    return (
      <Rating
        rating={rating}
        setRating={setRating}
        question={question}
        setQuestion={setQuestion}
        progress={progress}
        setProgress={setProgress}
      />
    );
  } else if (question === 5) {
    return (
      <Summary
        name={name}
        experience={experience}
        theatreVisits={theatreVisits}
        rating={rating}
        question={question}
        setQuestion={setQuestion}
        progress={progress}
        setProgress={setProgress}
      />
    );
  }
};

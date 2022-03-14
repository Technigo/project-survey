import React, { useState } from "react";

import { Welcome } from "./Welcome";
import { QuestionOne } from 'Components/QuestionOne'
import { QuestionTwo } from "./QuestionTwo";
import { QuestionThree } from "./QuestionThree";
import { QuestionFour } from "./QuestionFour";
import { Summary } from "./Summary";

export const Form = () => {
  const [count, setCount] = useState(1);
  // const [name, SetName] = useState("");
  // const [location, SetLocation] = useState("");
  // const [wantNewsletter, SetWantNewsletter] = useState(false);
  // const [ageGroup, SetAgeGroup] = useState();

  if (count === 1) {
    return (
      <div className="form-container">
      <Welcome/>
      <button onClick={() => setCount(count + 1)}>START</button>
      </div>
    )
  } else if (count === 2) {
    return (
      <div className="form-container">
      <QuestionOne
      // name={name}
      // SetName={SetName}
      />
      <button onClick={() => setCount(count + 1)}>NEXT</button>
      </div>
    )
  } else if (count === 3) {
    return (
      <div className="form-container">
      <QuestionTwo
      // location={location}
      // SetLocation={SetLocation}
      />
      <button onClick={() => setCount(count + 1)}>NEXT</button>
      </div>
    )
  } else if (count === 4) {
    return (
      <div className="form-container">
      <QuestionThree
      // wantNewsletter={wantNewsletter}
      // SetWantNewsletter={SetWantNewsletter}
      />
      <button onClick={() => setCount(count + 1)}>NEXT</button>
      </div>
    )
  } else if (count === 5) {
    return (
      <div className="form-container">
      <QuestionFour
      // ageGroup={ageGroup}
      // SetAgeGroup={SetAgeGroup}
      />
      <button onClick={() => setCount(count + 1)}>SUMMARY</button>
      </div>
    )
  } else {
    return (
      <div className="form-container">
      <Summary/>
      </div>
    )
  }
}
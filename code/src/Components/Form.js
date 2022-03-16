import React, { useState } from "react";

import { Welcome } from "./Welcome";
import { QuestionOne } from "./QuestionOne"
import { QuestionTwo } from "./QuestionTwo";
import { QuestionThree } from "./QuestionThree";
import { QuestionFour } from "./QuestionFour";
import { Summary } from "./Summary";

export const Form = () => {
  const [count, setCount] = useState(1);
  const [name, SetName] = useState("");
  const [location, SetLocation] = useState("");
  const [wantNewsletter, SetWantNewsletter] = useState(false);
  const [ageGroup, SetAgeGroup] = useState();

  const handleNameInputChange = (event) => {
    SetName(event.target.value);
  }

  const handleLocationInputChange = (event) => {
    SetLocation(event.target.value);
  }

  const handleNewsletterInputChange = (event) => {
    SetWantNewsletter(event.target.value);
  }

  const handleAgeGroupInputChange = (event) => {
    SetAgeGroup(event.target.value);
  }

  const Counter = () => {
    setCount(count + 1)
  }

  if (count === 1) {
    return (
      <div className="form-container">
      <Welcome/>
      <button onClick={Counter}>START</button>
      </div>
    )
  } else if (count === 2) {
    return (
      <div className="form-container">
      <QuestionOne
        name={name}
        onNameInputChange={handleNameInputChange}
      />
      <button onClick={Counter}>NEXT</button>
      </div>
    )
  } else if (count === 3) {
    return (
      <div className="form-container">
      <QuestionTwo
        location={location}
        onLocationInputChange={handleLocationInputChange}
      />
      <button onClick={Counter}>NEXT</button>
      </div>
    )
  } else if (count === 4) {
    return (
      <div className="form-container">
      <QuestionThree
        wantNewsletter={wantNewsletter}
        onNewsletterInputChange={handleNewsletterInputChange}
      />
      <button onClick={Counter}>NEXT</button>
      </div>
    )
  } else if (count === 5) {
    return (
      <div className="form-container">
      <QuestionFour
        ageGroup={ageGroup}
        onAgeGroupInputChange={handleAgeGroupInputChange}
      />
      <button onClick={Counter}>SUMMARY</button>
      </div>
    )
  } else {
    return (
      <div className="form-container">
      <Summary
        name={name} 
        location={location} 
        wantNewsletter={wantNewsletter} 
        ageGroup={ageGroup}
      />
      <button onClick={() => window.location.reload()}>THANK YOU!</button>
      </div>
    )
  }
}
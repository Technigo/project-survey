import React, { useState } from 'react';

const Intro = () => {
  const [surveyStart, setSurveyStart] = useState(1)

  const handleStartSurvey = (event) => {
    setSurveyStart(surveyStart + 1)

  }
    return (
      <>
          <h1>Stockholm museums: a survey</h1>
          <p>
          Our society is ever-changing and fast-paced. The museums of our city are often said to represent the opposite:
          a stable foundation. But does that make them... boring? It are questions like these that we are eager to find the 
          answers to. Thank you for taking the time to answer this survey, and for helping to make Stockholm's museums better.
          </p>
      </>
    );
  }

  export default Intro
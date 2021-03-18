import React, { useState } from 'react';

import { Welcome } from './Welcome';
import { QuestionCounter } from './QuestionCounter';
import { Name } from './Name';
import { CountrySelect } from './CountrySelect';
import { TravelTypeRadio } from './TravelTypeRadio';
import { AmenitiesRadio } from './AmenitiesRadio';
import { SatisfactionRange } from './SatisfactionRange';
import { Summary } from './Summary';

export const Form = () => {
  const [question, setQuestion] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [travelType, setTravelType] = useState("");
  const [amenities, setAmenities] = useState("");
  const [satisfaction, setSatisfaction] = useState(0);
  const [summary, setSummary] = useState(false);
  const questionsTotal = 5;

  const onSubmit = (e) => {
    e.preventDefault();
    setQuestion(question + 1)
    setPercentage(percentage + 20)
    question === questionsTotal && setSummary(true);
  }

return (
  <>
    {!summary ? 
      <form className="form-container" onSubmit={onSubmit}>
        <QuestionCounter 
          percentage={percentage}
          question={question}
          total={questionsTotal}/>
        {question === 0 && (
          <Welcome/>
        )}
        {question === 1 && (
          <Name 
            name={name}
            setName={setName}/>
        )}
        {question === 2 && (
          <CountrySelect 
            countryName={country}
            setCountry={setCountry}/>
        )}
        {question === 3 && (
          <TravelTypeRadio 
            checked={TravelTypeRadio === travelType}
            setTravelType={setTravelType}/>
        )}
        {question === 4 && (
          <AmenitiesRadio
            checked={AmenitiesRadio === amenities}
            setAmenities={setAmenities}/>
        )}
        {question === 5 && (
          <SatisfactionRange
            satisfaction={satisfaction}
            setSatisfaction={setSatisfaction}/>
        )}
      </form>
    :
      <Summary
        name={name}
        travelType={travelType}
        country={country}
        amenities={amenities}
        satisfaction={satisfaction}/>
    }
  </>
)
}
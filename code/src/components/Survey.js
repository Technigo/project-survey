import React, {useState} from 'react';

import './survey.css';
import { Text } from './Text';
import { Select } from './Select';
import { Radio } from './Radio';
import { Checkbox } from './Checkbox';
import { Submit } from './Submit';
import { Summary } from './Summary';

export const Survey = () => {
//const [showSurvey, setShowSurvey] = useState(false);
const [showSummary, setShowSummary] = useState(false);
const [name, setName] = useState("");
const [location, setLocation] = useState("");
const [ageGroup, setAgeGroup] = useState("");
const [wantsNewsletter, setWantsNewsletter] = useState(false);

const ageGroupsArray = ["0-18", "19-30", "31-50", "Over 50"];

const handleSubmit = (event) => {
  event.preventDefault()
  setShowSummary(true)
};

/*const handleShowSurvey = (event) => {
  event.preventDefault()
  setShowSurvey(true)
};*/

  return (
    <section className="survey-container">
      {!showSummary ? (
      <form onSubmit={handleSubmit}>
        <Text 
          name={name}
          setName={setName}
        />
        <Select 
          value={location}
          setLocation= {setLocation}
        />
        <Radio 
          ageGroup={ageGroup}
          setAgeGroup={setAgeGroup}
          ageGroupsArray={ageGroupsArray}
        />
        <Checkbox 
          wantsNewsletter={wantsNewsletter} 
          setWantsNewsletter={setWantsNewsletter}
        />
        <Submit />
      </form>
      ):
      (<Summary 
        name={name}
        location={location}
        ageGroup={ageGroup}
        wantsNewsetter={wantsNewsletter}
      />

      )} 
    </section>
  );
};
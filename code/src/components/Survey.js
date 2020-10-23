import React, {useState} from 'react';

import '../style/survey.css';
import { Welcome } from './Welcome';
import { Text } from './Text';
import { Select } from './Select';
import { Radio } from './Radio';
import { Checkbox } from './Checkbox';
import { Button } from './Button';
import { Summary } from './Summary';

export const Survey = () => {
const [question, setQuestion] = useState(0);
const [showSummary, setShowSummary] = useState(false);
const [name, setName] = useState("");
const [location, setLocation] = useState("");
const [ageGroup, setAgeGroup] = useState("");
const [wantsNewsletter, setWantsNewsletter] = useState(false);

const nextQuestion = () => setQuestion(question +1);

const ageGroupsArray = ["0-18 years", "19-30 years", "31-50 years", "51-60 years", "60+ years"];

const handleSubmit = (event) => {
  event.preventDefault()
  setShowSummary(true)
};
  console.log(question);
  return (
    <main className="survey-container">
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          
          {question === 0 && ( 
            <section className="question">
              <Welcome />
              <Button 
                button="button"
                click={nextQuestion}
                text="Start"
              />
            </section>
          )}

          {question === 1 && ( 
            <section className="question">
              <Text 
                name={name}
                setName={setName}
                askQuestion="What is your name?"
              />
              <Button 
                button="button"
                disabled={!name}
                click={nextQuestion}
                text="Next"
              />
            </section>
          )}
          
          {question === 2 && (
            <section className="question">
              <Select 
                value={location}
                setLocation= {setLocation}
                askQuestion="What is your favourite city to watch live music?"
              /> 
              <Button 
                button="button"
                disabled={!location}
                click={nextQuestion}
                text="Next"
              />
            </section>
          )}

          {question === 3 && (
            <section className="question">
              <Radio 
                ageGroup={ageGroup}
                setAgeGroup={setAgeGroup}
                ageGroupsArray={ageGroupsArray}
                askQuestion="What is your age group?"
              />
              <Button 
                button="button"
                disabled={!ageGroup}
                click={nextQuestion}
                text="Next"
              />
            </section>
          )}

          {question === 4 && (
            <section className="question">
                <Checkbox 
                  wantsNewsletter={wantsNewsletter} 
                  setWantsNewsletter={setWantsNewsletter}
                  askQuestion="Would you like to sign up for our newsletter?"
                />
                <Button 
                button="submit"
                disabled={!wantsNewsletter}
                text="Submit"
              />
            </section>
          )}

        </form>
      ):
      (<Summary 
        name={name}
        location={location}
        ageGroup={ageGroup}
        wantsNewsetter={wantsNewsletter}
      />

      )} 
    </main>
  );
};
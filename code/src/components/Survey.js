import React, {useState} from 'react';

import '../style/survey.css';
import { Welcome } from './Welcome';
import { Text } from './Text';
import { Select } from './Select';
import { Radio } from './Radio';
//import { Checkbox } from './Checkbox';
import { Rating } from './Rating';
import { Button } from './Button';
import { Summary } from './Summary';

export const Survey = () => {
const [question, setQuestion] = useState(0);
const [showSummary, setShowSummary] = useState(false);
const [name, setName] = useState("");
const [location, setLocation] = useState("");
const [ageGroup, setAgeGroup] = useState("");
const [rating, setRating] = useState(0);
//const [musicGenre, setMusicGenre] = useState(false);

const nextQuestion = () => setQuestion(question +1);

const cityArray = [
  {
    text:"Select city...",
    value:"", 
  },
  {
    text:"Austin",
    value:"austin", 
  },
  {
    text:"Barcelona",
    value:"barcelona",
  },
  {
    text:"Berlin",
    value:"berlin",
  },
  {
    text:"Chicago",
    value:"chicago",
  },
  {
    text:"Gothenburg", 
    value:"gothenburg", 
  },
  {
    text:"London",
    value:"london",
  },
  {
    text:"Nashville", 
    value:"nashville", 
  },
  {
    text:"New York", 
    value:"new York", 
  },
  {
    text:"Paris",
    value:"paris",
  },
  {
    text:"Seattle",
    value:"seattle",
  },
  {
    text:"Stockholm",
    value:"stockholm",
  },
  {
    text:"Tokyo",
    value:"tokyo",
  },    
];
const ageGroupsArray = ["0-18 years", "19-30 years", "31-50 years", "51-60 years", "60+ years"];
/*const musicGenreArray = ["Electronic", "Folk", "Hip-hop", "Indie",  "Metal",  "Pop", "Rock", "Soul"]; - I was unable to get the checkbox component to work. I have left the code in for feedback and also so that I can come back and try to fix this at a later date*/

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
                location={location}
                setLocation={setLocation}
                askQuestion="What is your favourite city to watch live music?"
                cityArray={cityArray}
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
                <Rating 
                  rating={rating} 
                  setRating={setRating}
                  askQuestion="How would you rate your last live music experience?"
                />
                <Button 
                button="submit"
                disabled={!rating}
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
        rating={rating}
      />

      )} 
    </main>
  );
};

/*{question === 5 && (
  <section className="question">
      <Checkbox 
        musicGenre={musicGenre} 
        setMusicGenre={setMusicGenre}
        askQuestion="What music genres are you interested in?"
        musicGenreArray={musicGenreArray}
      />
      <Button 
      button="submit"
      disabled={!musicGenre}
      text="Submit"
    />
  </section>
)}*/
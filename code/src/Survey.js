import React, { useState } from 'react'

import Header from './Header'
import InputName from './InputName'
import InputSelectColor from './InputSelectColor'
import InputAge from './InputAge'
import InputCheckboxHobbies from './InputCheckboxHobbies'
import { Button } from './Button'
import Summary from './Summary'

const Survey = () => {
  const [name, setName] = useState(''); 
  const [ageGroup, setAgeGroup] = useState(); 
  const [color, setColor] = useState('');  
  const [hobbies, setHobbies] =useState([]);    
  const [question, setQuestion] = useState(-1); //to show first Q after intro
  const [submit, setSubmit] = useState(false);

  const handleSubmit = event => { //To prevent that page reloads on submit
    event.preventDefault();
    setSubmit(true); //to show summary on submit
  };

  const nextQuestion = () => setQuestion(question + 1); //To get next Q 
  const previousQuestion = () => setQuestion(question - 1); //To go back

  const ageGroups = ["20-24", "25-29", "30-34", "35-39", "40-44", "45+"];

  const handleHobbiesChange = hobbieValue => {
    hobbies.includes(hobbieValue) 
      ? setHobbies( hobbies.filter(item => item !== hobbieValue) )//delete element when checked again
      : setHobbies( [...hobbies, hobbieValue] ) //using spread to add elements when checkoxes are clicked
  };

  return (
    <section className="survey-wrapper">
      {!submit ? (
        <form onSubmit={handleSubmit}>
        {question === -1 && ( 
          <section className="header-section"> 
            <Header/>
            <Button 
              type="button" 
              text="Start survey"
              click={nextQuestion}
            />
          </section>
        )} 
        {question === 0 && ( 
          <section className="question-wrapper">
            <InputName
              question="What is your name?"
              value={name}
              setName={setName} 
            />
            <div className="buttons"> 
              <Button 
                type="button" 
                text="Back"
                click={previousQuestion}
              />
              <Button 
                type="button" 
                disabled={!name}
                text={name ? 'Next question' : 'Type your name'}
                click={nextQuestion}
              />
            </div>
          </section>
        )}
        {question === 1 && ( 
          <section className="question-wrapper"> 
            <InputAge
              question="What is your age?"
              array={ageGroups}
              ageGroup={ageGroup}
              setAgeGroup={setAgeGroup}
            />
            <div className="buttons"> 
              <Button 
                type="button" 
                text="Previous question"
                click={previousQuestion}
              />
              <Button 
                type="button" 
                disabled={!ageGroup}
                text={ageGroup ? 'Next question' : 'Select age'}
                click={nextQuestion}
              />
            </div>
          </section>
        )}
        {question === 2 && ( 
          <section className="question-wrapper">  
            <InputSelectColor
              question="What is your favorite color?"
              value={color}
              setColor={setColor}
            />
            <div className="buttons"> 
              <Button 
                type="button" 
                text="Previous question"
                click={previousQuestion}
              />
              <Button 
                type="button" 
                disabled={!color}
                text={color ? 'Next question' : 'Select a color'}
                click={nextQuestion}
              />
            </div>
          </section>
        )}
        {question === 3 && ( 
          <section className="question-wrapper">
            <InputCheckboxHobbies
              userHobbies={hobbies}
              onHobbiesChange={handleHobbiesChange}
              question="What are your hobbies?"
            />
            <div className="buttons"> 
              <Button 
                type="button" 
                text="previous question"
                click={previousQuestion}
              />
              <Button 
                text={hobbies >= "1" ? 'Submit' : 'Select hobby'}
                type={hobbies >= "1" ? "submit" : "button"}
              />
            </div>
          </section>
        )}
        </form> 
      ) : (
      <section className="summary-wrapper"> 
        <Summary 
          heading="Summary"
          name={name}
          color={color}
          ageGroup={ageGroup}
          userHobbies={hobbies}
        />
        <div className="buttons"> 
          <Button 
            type="button" 
            text="Take the survey again?"
            click={() =>window.location.reload()}
          />
        </div>
      </section>
      )}   
    </section>
  );
};
export default Survey;
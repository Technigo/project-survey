import React, { useState } from 'react'
import { InputTypeText } from './InputTypeText'
import { InputTypeRadio } from './InputTypeRadio'
import { Button } from './Button'
import { Summary } from './Summary'
import { TheEnd } from './TheEnd'
import { SelectOption } from './SelectOption'

const colorArray = [
  "Pumpkin Orange",
  "Evil Black",
  "Spooky White",
  "Blood Red",
]

const activityArray = [
  "<Select an option>",
  "Throw a costume party",
  "Carve pumpkins",
  "Watch scary movies",
  "Visit a haunted house",
  "Trick or treat",
  "Light lots of candles",
  "Eat too much candy",
  "Do some scary react coding",
  "Nothing, I hate Halloween!",
]

export const Survey = () => {

  const [name, setName] = useState("");
  // const [showSummary, setShowSummary] = useState(false);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedActivity, setSelectedActivity] = useState("");
  // const [agreeCheckbox, setAgreeCheckbox] = useState(false);
  
  const [section, setSection] = useState('firstQuestion');

  const handleSubmit = (event) => {
    event.preventDefault();
    // setShowSummary(true);
  };

  return (
    <>
        <form className="survey" onSubmit={handleSubmit}>
          {section === 'firstQuestion' && (
          <>
            <InputTypeText className="name" header="Let's start with your name:" name={name} setName={setName} placeholder="Name" />
            <Button disable={name} btnText="Next" section="secondQuestion" setSection={setSection}/>
          </>
          )}
          {section === 'secondQuestion' && (
          <>
            <InputTypeRadio className="favourite-color" header="Pick your favourite halloween color?" array={colorArray} selected={selectedColor} setSelected={setSelectedColor} />
            <Button disable="disabled" btnText="Next" section="thirdQuestion" setSection={setSection}/>
          </>
          )}
          {section === 'thirdQuestion' && (
          <>
            <SelectOption className="selected-activity" header={`What will you do on Halloween?`} array={activityArray} selected={selectedActivity} setSelected={setSelectedActivity} />
            <Button disable={selectedActivity} btnText="Next" section="summary" setSection={setSection}/>
          </>
          )}
          

          {/* <label className="checkbox">
            Do you agree?
            <input
              type="checkbox"
              checked={agreeCheckbox}
              onChange={event => setAgreeCheckbox(event.target.checked)}
            />
          </label> */}

          {section === 'summary' && (
            <>
            <Summary name={name} activity={selectedActivity} color={selectedColor}/>
            <Button disable={name} btnText="hell yeah!" section="theEnd" setSection={setSection} />
            {/* <Button name={name} btnText="no, start over" section="firstQuestion" setSection={setSection} /> */}
            <button
              type="submit"
              onClick={() => window.location.reload()}
              // value={section}
              className="submit-button"
              // disabled={name === ''}
            > no, i lied!
            </button>
            </>
          )}

          {section === 'theEnd' && (
            <TheEnd />
          )}

        </form>

      

    </>
  );

};

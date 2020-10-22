import React, { useState } from 'react';
import { Summary } from './Summary';

const yesno = ["Yes", "No"];
const securitySystemOptions = ["Proximity detection system", "Camera monitoring", "Security door", "Landmines", "Safe room", "A camera but you made it look like it’s just a normal rock", "Baby monitor", "A moat", "Smoke Filler", "Sharks with frickin' laser beams attached to their heads", "Guard dog", "A sign that says “Guard dog” and there's a picture of a German Shepherd but in reality the dog is just a Shih tzu (classic)", "Doorbell camera"];

export const Form = () => {
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setShowSummary(true)
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [socSecNum, setSocSecNum] = useState('');
  const [pinValue, setPinValue] = useState('');
  const [securitySystems, setSecuritySystem] = useState([]);
  const [maidenName, setMaidenName] = useState([]);
  const [petName, setPetName] = useState('');
  
  const onNameChange = e => {
    setName(e.target.value)
    console.log("name: " + name)
  }
  const onEmailChange = e => {
    setEmail(e.target.value)
    console.log("email: " + email)
  }
  const onMaidenNameChange = e => {
    setMaidenName(e.target.value)
    console.log("maiden name: " + maidenName)
  }
  const onSocSecNumChange = e => {
    setSocSecNum(e.target.value)
    console.log("socSecNum: " + e.target.value)
  }
  const onPinValueChange = e => {
    setPinValue(e)
    console.log("PinValue: " + e)
  }
  const onSecuritySystemChange = securitySystem => {
    // If it's included in the securitySystems array, then we need to delete it. Otherwise, add it.
    securitySystems.includes(securitySystem)
      ? setSecuritySystem(securitySystems.filter(item => item !== securitySystem))
      : setSecuritySystem([...securitySystems, securitySystem])
    console.log(securitySystems)
  }
  const onPetNameChange = e => {
    setPetName(e.target.value)
    console.log("petName: " + e.target.value)
  }


  return (
    <>
    {/* If showSummary is false (i.e. if it shouldn't be shown, then: ) */}
      {!showSummary ? (
      <form className="column" onSubmit={handleSubmit}>

        {/* NAME QUESTION */}
        <div className="column">
          <label htmlFor="name">What's your name?</label>
          <input
            value={name}
            onChange={onNameChange}
            id="name"
            type="text">
          </input>
        </div>

        {/* E-MAIL QUESTION */}
        <div className="column">
          <label htmlFor="email">And your e-mail?</label>
          <input
            value={email}
            onChange={onEmailChange}
            id="email"
            type="text">
          </input>
        </div>

        {/* SOCIAL SECURITY NUMBER QUESTION */}
        <div className="column">
          <label htmlFor="socSecNum">Social Security Number?</label>
          <input
            value={socSecNum}
            onChange={onSocSecNumChange}
            id="socSecNum"
            type="text">
          </input>
        </div>

        {/* RADIO BUTTONS */}
        <p>Is your credit card PIN code in this list?</p>
        {yesno.map(value => (
          <div className="row">
            <input
              key={value}
              type="radio"
              id={value}
              name="isPinCodeInList"
              value={value}
              onChange={event => onPinValueChange(event.target.value)}
            />
            <label htmlFor={value}>{value}</label><br></br>
          </div>
        ))}

        {/* CHECKBOXES */}
        <p>Please select the home security system(s) that you have installed.</p>
        {securitySystemOptions.map(value => (
          <>
            <div className="row">
              <input
                type="checkbox"
                id={value}
                checked={securitySystems.includes(value)}
                onChange={() => onSecuritySystemChange(value)}
              />
              <label htmlFor={value}>{value}</label>
            </div>
          </>
        ))}

        {/* MAIDEN NAME QUESTION */}
        <div className="column">
          <label htmlFor="maidenName">Your mother's maiden name?</label>
          <input
            value={maidenName}
            onChange={onMaidenNameChange}
            id="socSecNum"
            type="text">
          </input>
        </div>

        {/* PET NAME QUESTION */}
        <div className="column">
          <label htmlFor="petName">And finally – what was the name of your first pet?</label>
          <input
            value={petName}
            onChange={onPetNameChange}
            id="petName"
            type="text">
          </input>
        </div>


        <input type="submit"></input>

      </form>
      )
      // If showSummary is not NOT false (i.e. true), then display results
      :(
      <div className="div-results">
      <Summary
        name={name}
        email={email}
        pinValue={pinValue}
        socSecNum={socSecNum}
        petName={petName}
        maidenName={maidenName}
        securitySystems={securitySystems.join(', ')}
      />
      </div>
      )}
    </>
  )

}

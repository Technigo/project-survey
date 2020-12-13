import React, { useState } from 'react'
import { Summary } from './Summary'

// Two arrays which are mapped over in the 
const yesno = ["Yes", "No"]
const securitySystemOptions = ["Proximity detection system", "Camera monitoring", "Security door", "Landmines", "Safe room", "A camera but you made it look like it’s just a normal rock", "Key under rock", "A moat", "Sharks with frickin' laser beams attached to their heads", "Guard dog", "A sign that says “Guard dog” and there's a picture of a German Shepherd but in reality the dog is just a Shih tzu (classic)", "Doorbell camera"]

export const Form = () => {
  const [showSummary, setShowSummary] = useState(false)

  // Function called on submit: // Don't reload page on submit.
  const handleSubmit = e => {
    e.preventDefault()
    setShowSummary(true)
  }

  // Define state hooks with default values.
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [socSecNum, setSocSecNum] = useState('')
  const [pinValue, setPinValue] = useState('')
  const [securitySystems, setSecuritySystem] = useState([])
  const [maidenName, setMaidenName] = useState([])
  const [petName, setPetName] = useState('')
  const [gender, setGender] = useState('')


  // FUNCTIONS. (Do all of these need to be defined in this way? Very repetitive)
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
  const onGenderChange = e => {
    setGender(e)
    console.log("Gender: " + e)
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
      <header>
        <div className="container-left">
          <img className="img-logo" src={require('./assets/logo-esec.png')} alt="E-sec logotype"></img>
          <p className="italic">Where your vulnerability is our profit®</p>
        </div>
        <div className="container-right" aria-label="Links navigation">
          <a href="#">CyberSafe</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Careers</a>
          <a href="#">Jack Ingoff Blog</a>
        </div>
      </header>

      <main>
        <h1>The E-Sec Internet Vulnerability Checker</h1>
        <div className="ceo-container">
          <div className="ceo-top row">
            <div className="column">
              <p className="italic">"At E-sec, we take your security seriously. This is why we created the Internet Vulnerability Checker which lets you and your loved ones know if you are in risk of being hacked."</p>
              <span className="align-right">–Jack Ingoff, CEO E-Sec</span>
            </div>
            <img className="ceo-img" src={require('./assets/jackingoff.png')} alt="Portrait shot of our magnificent CEO Jack Ingoff" />
          </div>
          <div className="ceo-bottom">
            <p className="tip-of-the-day"><img className="icon-16" src={require('./assets/ic_info.svg')} alt="Info icon" /><span className="bold">Tip of the day:</span> Don’t use a password such as “password”, as it is easily hacked (I know from experience). By reversing it to “drowssap” and adding a “1” afterwards, you’ll have a password wich is virtually un-hackable.</p>
          </div>

        </div>

        {/* If showSummary is false (i.e. if it shouldn't be shown, then do this: ) */}
        {!showSummary ? (

          <form className="column" onSubmit={handleSubmit}>

            {/* NAME QUESTION */}
            <div className="form-item column">
              <label htmlFor="name" className="q-title">What's your full name?<span className="required">*</span></label>

              <input
                value={name}
                onChange={onNameChange}
                id="name"
                type="text"
                required>
              </input>
              <p className="italic smaller opacity-65 margin-top">As stated in your passport.</p>
            </div>

            {/* E-MAIL QUESTION */}
            <div className="form-item column">
              <label htmlFor="email" className="q-title">And your e-mail?<span className="required">*</span></label>
              <input
                value={email}
                onChange={onEmailChange}
                id="email"
                type="email"
                required>
              </input>
            </div>


            {/* GENDER QUESTION */}
            <div className="form-item column">
              <label htmlFor="gender" id="gender" className="q-title">Gender</label>
              <select
                value={gender}
                name="gender"
                id="gender"
                onChange={(e) => onGenderChange(e.target.value)}
              >
                <option value="">Pick your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Irrelevant">This is in many cases, this included, an irrelevant question</option>
                <option value="Other/Prefer not to say">Other/Prefer not to say</option>
              </select>

            </div>

            {/* SOCIAL SECURITY NUMBER QUESTION */}
            <div className="form-item column">
              <label htmlFor="socSecNum" className="q-title">Social Security Number?<span className="required">*</span></label>
              <input
                value={socSecNum}
                onChange={onSocSecNumChange}
                id="socSecNum"
                type="number"
                required>
              </input>
            </div>

            {/* RADIO BUTTONS */}
            <div className="form-item column">
              <p className="q-title">Is your credit card PIN code in <a href="https://pastebin.com/2qbRKh3R" target="_blank" rel="noopener noreferrer">this list</a>?<span className="required">*</span></p>
              {yesno.map(value => (
                <div className="row" key={value}>
                  <input
                    key={value}
                    type="radio"
                    id={value}
                    name="isPinCodeInList"
                    value={value}
                    onChange={event => onPinValueChange(event.target.value)}
                    required
                  />
                  <label htmlFor={value}>{value}</label><br></br>
                </div>
              ))}</div>

            {/* LOCATION */}
            {/* <div className="form-item column">
              <p className="q-title">Enable your location</p>
              <button type="button" className="button blue">Enable your location</button>
              <p className="italic smaller opacity-65 margin-top">We need to know your location to be able to make sure you're secure.</p>
            </div> */}
            {/* Commenting this out because I didn't have time to add it, BUT I MIGHT SOMEDAY. Hopefully. We'll see. */}

            {/* CHECKBOXES */}
            <div className="form-item column">
              <p className="q-title">Please select the home security system(s) that you have installed.</p>
              {/* Map over the securitySystemOptions array, and create a new input based on all the entries in the array. */}
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
            </div>

            {/* MAIDEN NAME QUESTION */}
            <div className="form-item column">
              <label htmlFor="maidenName" className="q-title">What is your mother's maiden name?</label>
              <input
                value={maidenName}
                onChange={onMaidenNameChange}
                id="socSecNum"
                type="text">
              </input>
            </div>

            {/* PET NAME QUESTION */}
            <div className="form-item column">
              <label htmlFor="petName" className="q-title">What was the name of your first pet?<span className="required">*</span></label>
              <input
                value={petName}
                onChange={onPetNameChange}
                id="petName"
                type="text"
                required>
              </input>
            </div>

            <input type="submit" className="button blue"></input>
          </form>
        )
          // If showSummary is not NOT false (i.e. true), then display results
          : (
            <div className="div-results">
              <Summary
                name={name}
                email={email}
                pinValue={pinValue}
                socSecNum={socSecNum}
                petName={petName}
                maidenName={maidenName}
                gender={gender}
                securitySystems={securitySystems.join(', ')}
              />
            </div>
          )}
      </main>
    </>
  )
}

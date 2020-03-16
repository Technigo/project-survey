import React, { useState } from 'react'
import './app.css'


const ageGroup = ['too young', '19-35', '35-65', '+65'];

export const App = () => {
  const [ageGroups, setAgeGroup] = useState("");
  const [hobby, setHobby] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <div className='form-container'>
      <h1>Win a very special evening for you and someone equally as special!</h1>
      <h3>Just fill in the form below to participate in the competion</h3>
      <p>... and you could be the lucky one winning a custom made evening for you and your friend.</p>

      <div className='questions-container'>
        <div className="questions">

          <form onSubmit={handleSubmit}>
            <h2>What is your name?</h2>
            <input type='text'
              onChange={event => setName(event.target.value)}
              value={name}>
            </input>
            <h2>{`How old are you ${name}?`}</h2>
            {ageGroup.map(group => (
              <label key={group}>
                <input type='radio'
                  value={group}
                  onChange={event => setAgeGroup(event.target.value)}
                  checked={ageGroups === group}
                />
                {group}
              </label>
            ))}

            <h2> What is a perfect evenig according to you?</h2>
            <select className="hobby"
              onChange={event => setHobby(event.target.value)}
              value={hobby}>
              <option value="resturant"> Candlelight dinner in a cosy resturant</option>
              <option value="netflix"> Netlfix and Chill</option>
              <option value="dancing"> Dancing on my own</option>
              <option value="party"> Party with my friends</option>
              <option value="concert"> Headbangers ball concert</option>
            </select>

            <h2> {`${name}`}, please type in your email address</h2>
            <input type="email" value={email} required onChange={event => setEmail(event.target.value)}></input>

            <h2>How exicited are you?!</h2>

            <button type="submit">Join the competion!</button>
          </form>

          {showSummary && <section className="summary">
            <h2>We got your details:</h2>
            <p>Name: {name} </p>
            <p> Age: {ageGroups}</p>
            <p> You love: {hobby} </p>
            <p>Your email address: {email}</p>
            <p>If you are the lucky winner we will send you and email within 2 weeks with all the details
              If you are not the winner we will send you some inspiration about fun things to do in the city.</p>
          </section>
          }

        </div>
      </div>
    </div>
  )
}


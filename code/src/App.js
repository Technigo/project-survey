import React, { useState } from 'react'

export const App = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [willTravel, setWillTravel] = useState(false);
  const [roles, setRoles] = useState('You did not choose any');

  const [submit, setSubmit] = useState(false);

  const rolesList = [
    'Frontend',
    'Backend',
    'Fullstack',
    'Cloud'
  ]

  const submitForm = () => {
    // event.preventDefault();
    setSubmit(true);
  }

 if (submit === false) {
  return (
    <div>
      {/* Controlled component */}
      <form onSubmit={submitForm}>
      <div>
          <h1>Application form</h1>
          <h2>Developer and software engineering</h2>
          <label className="input-fields">
          Your name is: {name}
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
            required
            />
          </label>
        </div>

        <div>
        {/* Select form*/}
          <label className="input-fields">
            Choose location:
            <select 
              value={location} 
              onChange={event => setLocation(event.target.value)}
              required
            >
              <option value="">Choose a location</option>
              <option value="Stockholm">Stockholm</option>
              <option value="Malmö">Malmö</option>
              <option value="Göteborg">Göteborg</option>            
            </select>
          </label>
        </div>

        <div>
        {/* checkboxes */}
          <label>
            I want to travel in work
            <input 
              type="checkbox"        
              checked={willTravel}
              onChange={event => setWillTravel(event.target.checked)}
            />
          </label>
        </div>

        <div>
          <h2>Interested in working with (select one)</h2>
          {rolesList.map(role => (
            <label key={role}>
            <input 
              type="radio"
              value={role}
              onChange={event => setRoles(event.target.value)}
              checked={false ? roles : roles === role}  
            />
            {role}
            </label>   
          ))}
        </div> 
        
        <button className="submit-button" type="submit">Submit</button>
        </form>
    </div>
  )

  }
  else {
    return (
      <div className="form-response-div">
        <h1>Confirmation on your provided information:</h1>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
        <p>Willing to travel: {willTravel ? 'Yes' : 'No'}</p>
        <p>Role: {roles}</p>
        <h2>Thanks! We will shortly contact you</h2>
      </div>
    )
  }
}

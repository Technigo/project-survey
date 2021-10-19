import React from "react"



const Connection = ({role, setRole}) => {
  return (
  <form onSubmit= {event => event.preventDefault()}>
        <p>What's your connection to Birgit?</p>
        <select
          onChange= {event => setRole(event.target.value)}
          value= {role}
        >
          <option disabled value="">Select an option: </option>
          <option value="teacher">CodeCoach</option>
          <option value="student">Fellow Student</option>
          <option value="recruiter">Recruiter</option>
          <option value="friend">Friend</option>
          <option value="other">Other</option>
        </select>
      </form>
  )    
}

export default Connection
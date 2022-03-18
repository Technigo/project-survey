import React from "react"

const Summary = ({ gender, city, username}) => {
  return (
    <form>
      <h1>Summary of the Survey</h1>  
      <p>Name: {username}</p>
      <p>Gender: {gender}</p>
      <p>Location: {city}</p>
      
    </form>
  ) 
}

export default Summary

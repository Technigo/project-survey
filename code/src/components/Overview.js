import React from "react";

// Overview of results. 
// If possible, add compare with a friend-button

const Overview = ({ nameInput, surnameInput, rangeInput, selectInput, radioInput }) => {
    return (
      <div>
        <h2>Results:</h2>
        <p>Name: {nameInput} {surnameInput}</p>
        <p>Like Autumn: {rangeInput}</p>
        <p>Favourite drink: {selectInput}</p>
        <p>Dislike about Autumn: {radioInput}</p>

      
      </div>
    )
}

export default Overview;
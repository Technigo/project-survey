import React from 'react';

const Overview = ({ nameInput, surnameInput }) => {
    return (
        <section>
            <h2>Summary of survey: </h2>
            <p>Name: {nameInput}</p>
            <p>Surname: {surnameInput}</p>
            <p>Favorite season: {seasonInput.value}</p>
            <p>Preffered outdoor temperature: {}</p>
          </section>
      )
}

export default Overview;
import React from 'react'

//Checkboxes for hobbies

const InputCheckboxHobbies = ({question}) => {
  return (
    <>
    <h3>{question}</h3> 
    <label htmlFor="hobbieCoding">Coding</label>
    <input id="hobbieCoding" type="checkbox" />
    <label htmlFor="hobbieSports">Sports</label>
    <input id="hobbieSports" type="checkbox" />
    <label htmlFor="hobbieMusic">Music</label>
    <input id="hobbieMusic" type="checkbox" />
    <label htmlFor="hobbieReading">Reading</label>
    <input id="hobbieReading" type="checkbox" />
    <label htmlFor="hobbieGardening">Gardening</label>
    <input id="hobbieGardening" type="checkbox" />
    <label htmlFor="hobbieGaming">Gaming</label>
    <input id="hobbieGaming" type="checkbox" />
    <label htmlFor="hobbieOrganization">Involvement in non-profit org.</label>
    <input id="hobbieOrganization" type="checkbox" />
    <label htmlFor="hobbiePoliticsSociety">Politics / Societal issues</label>
    <input id="hobbiePoliticsSociety" type="checkbox" />
    <label htmlFor="hobbieOther">Other</label>
    <input id="hobbieOther" type="checkbox" />

    </>
  );
};
export default InputCheckboxHobbies;
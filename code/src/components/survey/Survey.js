import React, { useState } from "react";

import FirstName from "./FirstName";
import LastName from "./LastName";
import Gender from "./Gender";
import Occupation from "./Occupation";
import Age from "./Age";
import Information from "./Information";

const Survey = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState();
  const [occupation, setOccupation] = useState("");
  const [age, setAge] = useState(18);
  const [section, setSection] = useState(1);

  const handleSubmitFirstName = ({ firstName }) => {
    setFirstName(firstName);
    setSection(2);
  };

  const handleSubmitLastName = ({ lastName }) => {
    setLastName(lastName);
    setSection(3);
  };

  const handleSubmitGender = ({ gender }) => {
    setGender(gender);
    setSection(4);
  };

  const handleSubmitOccupation = ({ occupation }) => {
    setOccupation(occupation);
    setSection(5);
  };

  const handleSubmitAge = ({ age }) => {
    setAge(age);
    setSection(6);
  };

  const handleSubmitInformation = ({ information }) => {
    onSubmit({
      firstName,
      lastName,
      gender,
      occupation,
      age,
      information,
    });
  };

  return (
    <header>
      <div className="container">
        <h1> SURVEY FORM</h1>

        {section === 1 && <FirstName onSubmit={handleSubmitFirstName} />}
        {section === 2 && <LastName onSubmit={handleSubmitLastName} />}
        {section === 3 && <Gender onSubmit={handleSubmitGender} />}
        {section === 4 && <Occupation onSubmit={handleSubmitOccupation} />}
        {section === 5 && <Age onSubmit={handleSubmitAge} />}
        {section === 6 && <Information onSubmit={handleSubmitInformation} />}
      </div>
    </header>
  );
};

export default Survey;

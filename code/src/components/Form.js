import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Radio from "./Radio";
import Select from "./Select";
import Check from "./Check";
import SumPage from "./SumPage";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [showSubmit, setShowSubmit] = useState(false);
  const [eventDate, setEventDate] = useState();
  const [wantsNewsletter, setWantsNewsletter] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowSubmit(true);

    console.log("summery");
    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("email", email);
    console.log("location", location);
    console.log("eventDate", eventDate);
    console.log("wantsNewsletter", wantsNewsletter);
  };

  console.log("showSubmit", showSubmit);
  if (!showSubmit) {
    return (
      <div>
        {currentPage === 0 && (
          <div>
            <h1>Welcome to our event!</h1>
            <Button buttonText={"Register"} handleClick={handleNextPage} />
          </div>
        )}

        <form className="form-container" onSubmit={handleFormSubmit}>
          {currentPage === 1 && (
            <div>
              <h2>Your contact details</h2>
              <Input
                placeholder={"First name:"}
                setState={setFirstName}
                value={firstName}
              />
              <Input
                placeholder={"Last name:"}
                setState={setLastName}
                value={lastName}
              />
              <Input placeholder={"Email:"} setState={setEmail} value={email} />
              <Button buttonText={"back"} handleClick={handlePrevPage} />
              <Button buttonText={"Next"} handleClick={handleNextPage} />
            </div>
          )}

          {currentPage === 2 && (
            <div className="form-page">
              <Radio setEventDate={setEventDate} eventDate={eventDate} />
              <Button buttonText={"back"} handleClick={handlePrevPage} />
              <Button buttonText={"Next"} handleClick={handleNextPage} />
            </div>
          )}

          {currentPage === 3 && (
            <div className="form-page">
              <Select setLocation={setLocation} location={location} />
              <Button buttonText={"back"} handleClick={handlePrevPage} />
              <Button buttonText={"Next"} handleClick={handleNextPage} />
            </div>
          )}

          {currentPage === 4 && (
            <div className="form-page">
              <Check
                setWantsNewsletter={setWantsNewsletter}
                wantsNewsletter={wantsNewsletter}
              />
              <Button buttonText={"back"} handleClick={handlePrevPage} />
              <Button buttonText={"Submit"} buttonType={"submit"} />
            </div>
          )}
        </form>
        {/* {showSubmit && <SumPage />} */}
      </div>
    );
  } else {
    return <SumPage firstName={firstName} />;
  }
};

export default Form;

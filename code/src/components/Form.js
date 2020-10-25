import React, { useState } from "react";
import "./form.css";
import Button from "./Button";
import RadioPage from "./RadioPage";
import SelectPage from "./SelectPage";
import CheckPage from "./CheckPage";
import SummeryPage from "./SummeryPage";
import InputPage from "./InputPage";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState();
  const [wantsNewsletter, setWantsNewsletter] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);

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

  const handleReturn = () => {
    setCurrentPage(0);
    setShowSubmit(false);
    setFirstName("");
    setLastName("");
    setEmail("");
    setLocation("");
    setEventDate("");
    setWantsNewsletter(false);
  };

  console.log("showSubmit", showSubmit);
  if (!showSubmit) {
    return (
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          {/********** START PAGE **********/}

          {currentPage === 0 && <h1>Welcome to our event!</h1>}

          {/********** FORM PAGE 1 **********/}

          {currentPage === 1 && (
            <InputPage
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
            />
          )}

          {/********** FORM PAGE 2 **********/}

          {currentPage === 2 && (
            <RadioPage setEventDate={setEventDate} eventDate={eventDate} />
          )}

          {/********** FORM PAGE 3 **********/}

          {currentPage === 3 && (
            <SelectPage setLocation={setLocation} location={location} />
          )}

          {/********** FORM PAGE 4 **********/}

          {currentPage === 4 && (
            <>
              <CheckPage
                setWantsNewsletter={setWantsNewsletter}
                wantsNewsletter={wantsNewsletter}
              />
            </>
          )}

          {/********** BUTTONS **********/}

          <div className="button-container">
            {currentPage !== 0 && (
              <Button buttonText={"Back"} handleClick={handlePrevPage} />
            )}

            {currentPage !== 4 && (
              <Button
                buttonText={currentPage === 0 ? "Register" : "Next"}
                handleClick={handleNextPage}
              />
            )}

            {currentPage === 4 && (
              <Button buttonText={"Submit"} buttonType={"submit"} />
            )}
          </div>
        </form>
      </div>
    );
    {
      /********** SUMMERY **********/
    }
  } else {
    return (
      <div className="form-container">
        <div className="summery-container">
          <SummeryPage firstName={firstName} />
          <div className="button-container">
            <Button buttonText={"Return"} handleClick={handleReturn} />
          </div>
        </div>
      </div>
    );
  }
};

export default Form;

import React, { useState } from "react";
import "./form.css";
import Button from "./Button";
import RadioPage from "./RadioPage";
import SelectPage from "./SelectPage";
import CheckPage from "./CheckPage";
import SummeryPage from "./SummeryPage";
import InputPage from "./InputPage";
import ErrorMessage from "./ErrorMessage";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const [showSubmit, setShowSubmit] = useState(false);

  const handleNextPage = () => {
    // regex e-mail
    const mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    mail.test(email);

    // validations
    if (currentPage === 1) {
      if (firstName === "" || lastName === "" || email === "") {
        setErrorMessage("Contact details are required");
        // exit function
        return null;
      } else if (mail.test(email) === false) {
        setErrorMessage("Please, check your email");
        // exit function
        return null;
      }
    } else if (currentPage === 2 && eventDate === "") {
      setErrorMessage("Select a date");
      // exit function
      return null;
    } else if (currentPage === 3 && location === "") {
      setErrorMessage("Select a ticket");
      // exit function
      return null;
    }
    // reset error message
    setErrorMessage("");
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    // reset error message
    setErrorMessage("");
    setCurrentPage(currentPage - 1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // validations
    if (currentPage === 4 && acceptTerms === false) {
      setErrorMessage("You have to accept terms");
      return null;
    }

    setShowSubmit(true);
    // reset error message
    setErrorMessage("");

    console.log("lastName", lastName);
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
    setAcceptTerms(false);
  };

  if (!showSubmit) {
    return (
      <div className="form-container">
        <form name="survey" onSubmit={handleFormSubmit}>
          {/* START PAGE */}

          {currentPage === 0 && <h1>Welcome to our event!</h1>}

          {/* FORM PAGE 1 */}

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

          {/*FORM PAGE 2 */}

          {currentPage === 2 && (
            <RadioPage setEventDate={setEventDate} eventDate={eventDate} />
          )}

          {/* FORM PAGE 3 */}

          {currentPage === 3 && (
            <SelectPage setLocation={setLocation} location={location} />
          )}

          {/* FORM PAGE 4 */}

          {currentPage === 4 && (
            <>
              <CheckPage
                setWantsNewsletter={setWantsNewsletter}
                wantsNewsletter={wantsNewsletter}
                setAcceptTerms={setAcceptTerms}
                acceptTerms={acceptTerms}
              />
            </>
          )}

          {/* ERROR */}
          {errorMessage !== "" && <ErrorMessage errorMessage={errorMessage} />}

          {/* BUTTONS */}

          <div className="btn-container">
            {currentPage !== 0 && (
              <Button buttonText={"Back"} handleClick={handlePrevPage} />
            )}

            {currentPage !== 4 && (
              <Button
                buttonText={currentPage === 0 ? "Register" : "Next"}
                handleClick={handleNextPage}
                singleButton={currentPage === 0 ? true : false}
              />
            )}

            {currentPage === 4 && (
              <Button buttonText={"Submit"} buttonType={"submit"} />
            )}
          </div>
        </form>
      </div>
    );

    /* SUMMERY */
  } else {
    return (
      <div className="form-container">
        <div className="summery-container">
          <SummeryPage
            firstName={firstName}
            email={email}
            eventDate={eventDate}
            location={location}
            wantsNewsletter={wantsNewsletter}
          />
          <div className="btn-container">
            <Button
              buttonText="Return"
              handleClick={handleReturn}
              singleButton
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Form;

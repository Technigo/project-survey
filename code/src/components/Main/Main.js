import React, { useState } from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDoubleRight,
  faChevronDoubleLeft,
} from "@fortawesome/pro-duotone-svg-icons";
import { Header } from "../Header/Header";
import { TravelLocation } from "../TravelLocation/TravelLocation";
import { AmountTravellers } from "../AmountTravellers/AmountTravellers";
import { PassengerInformation } from "../PassengerInformation/PassengerInformation";
import { ResponsibleForBooking } from "../ResponsibleForBooking/ResponsibleForBooking";
import { ShowBooking } from "../ShowBooking/ShowBooking";

// Set step to 1, set city and traveltype to "", set amountOfTravellers to 1 as default and make a empty namelist. Set telephone and email to "".
export const Main = () => {
  const [step, setStep] = useState(1);
  const [city, setCity] = useState("");
  const [travelType, setTravelType] = useState("");
  const [amountOfTravellers, setAmountOfTravellers] = useState(1);
  const [nameList, setNameList] = useState([
    {
      firstName: "",
      lastName: "",
      passengerNumber: 1,
    },
    {
      firstName: "",
      lastName: "",
      passengerNumber: 2,
    },
    {
      firstName: "",
      lastName: "",
      passengerNumber: 3,
    },
    {
      firstName: "",
      lastName: "",
      passengerNumber: 4,
    },
    {
      firstName: "",
      lastName: "",
      passengerNumber: 5,
    },
  ]);
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");

  //Functions with a copy of the nameList to be able to edit the values and then update the original namelist with the new values so that the state changes.
  const onSetFirstName = (firstName, passengerNumber) => {
    const nameListCopy = [...nameList];
    const passenger = nameListCopy[passengerNumber - 1];
    passenger.firstName = firstName;
    setNameList(nameListCopy);
  };

  const onSetLastName = (lastName, passengerNumber) => {
    const nameListCopy = [...nameList];
    const passenger = nameListCopy[passengerNumber - 1];
    passenger.lastName = lastName;
    setNameList(nameListCopy);
  };

  //Function that setStep = (Step + 1)
  const onBtnClick = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  //functions that sets what city, traveltype, amount of passenger, email and telephonenr.
  const onSetCity = (e) => {
    setCity(e.target.value);
  };

  const onSetTravelType = (travelType) => {
    setTravelType(travelType);
  };

  const onSetAmountOfTravellers = (amountOfTravellers) => {
    setAmountOfTravellers(amountOfTravellers);
  };

  const onSetEmail = (email) => {
    setEmail(email);
  };

  const onSetTelephoneNumber = (telephoneNumber) => {
    setTelephoneNumber(telephoneNumber);
  };

  //This part control and renders what will happen at each step and sends the needed props to the childcomponent.
  return (
    <div className="content">
      <Header step={step} />
      <form className="form" onSubmit={onBtnClick}>
        {step === 1 && (
          <TravelLocation
            onCityChanged={onSetCity}
            onTravelTypeChanged={onSetTravelType}
            city={city}
            travelType={travelType}
          />
        )}

        {step === 2 && (
          <AmountTravellers
            onAmountOfTravellers={onSetAmountOfTravellers}
            amountOfTravellers={amountOfTravellers}
          />
        )}

        {step === 3 && (
          <PassengerInformation
            amountOfTravellers={amountOfTravellers}
            onChangeFirstName={onSetFirstName}
            onChangeLastName={onSetLastName}
            nameList={nameList}
          />
        )}

        {step === 4 && (
          <ResponsibleForBooking
            email={email}
            telephoneNumber={telephoneNumber}
            onChangeEmail={onSetEmail}
            onChangeTelephoneNumber={onSetTelephoneNumber}
          />
        )}

        {step === 5 && (
          <ShowBooking
            city={city}
            nameList={nameList}
            email={email}
            telephoneNumber={telephoneNumber}
            travelType={travelType}
          />
        )}
        {/*If step is not 1 there will be a previous button.  */}
        <div className="form__btns-container">
          {step !== 1 && (
            <button
              type="button"
              className="btn previous-step"
              onClick={() => setStep(step === 1 ? 1 : step - 1)}
            >
              <FontAwesomeIcon icon={faChevronDoubleLeft} /> Previous
            </button>
          )}

          {/* If step is not 5 there will be a continue button.  */}
          {step !== 5 && (
            <button type="submit" className="btn submit" onSubmit={onBtnClick}>
              Continue <FontAwesomeIcon icon={faChevronDoubleRight} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

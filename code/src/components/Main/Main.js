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

  const onBtnClick = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

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

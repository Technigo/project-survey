import React, { useState } from "react";
import Header from "./Header";
import Name from "./Name";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import Summary from "./Summary";

// Four properties
const ServeyForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);
  const [isResultDisplayed, setisResultDisplayed] = useState(false);

  //   Three functions
  const HandleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <section>
      <Header />
      <Name name={name} onInputChange={HandleInputChange} />
      <FirstQuestion Date={date} onDateChange={handleDateChange} />
      <SecondQuestion Time={time} onTimeChange={handleTimeChange} />

      <button onClick={() => setisResultDisplayed(true)}>Send</button>

      {isResultDisplayed && <Summary name={name} date={date} time={time} />}
    </section>
  );
};

export default ServeyForm;

import React, { useState } from "react";

import Survey from "./Components/Survey";
import Start from "./Components/Start";
import Summary from "./Components/Summary";

export const App = () => {
  const [section, setSection] = useState(0);
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [options, setOptions] = useState("Choose below");
  const [name, setName] = useState("");

  return (
    <main className="main">
      <Start setSection={setSection} section={section} />

      <Summary
        setSection={setSection}
        section={section}
        day={day}
        time={time}
        options={options}
        name={name}
      />

      <Survey
        setDay={setDay}
        setTime={setTime}
        setOptions={setOptions}
        options={options}
        setName={setName}
        name={name}
        section={section}
        setSection={setSection}
      />
    </main>
  );
};

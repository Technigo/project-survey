import React, { useState } from "react";

import { Welcome } from "./Welcome";
import { TextInput } from "./TextInput"
import { CheckboxInput } from "./CheckboxInput";
import { SelectInput } from "./SelectInput";
import { RadioInput } from "./RadioInput";
import { EmailInput } from "./EmailInput";
import { Summary } from "./Summary";

// ALl use state and event handlers for the page are here

export const Form = () => {
  const [count, setCount] = useState(1);
  const [name, SetName] = useState("");
  const [membership, SetMembership] = useState(false);
  const [location, SetLocation] = useState("");
  const [occupationGroup, SetOccupationGroup] = useState();
  const [email, setEmail] = useState("")

  // a counter in order to render the different steps/compontents of site

  const Counter = () => {
    setCount(count + 1)
  }

  const handleNameInputChange = (event) => {
    SetName(event.target.value);
  }

  const handleMembershipInputChange = (event) => {
    SetMembership(event.target.value);
  }

  const handleLocationInputChange = (event) => {
    SetLocation(event.target.value);
  }

  const handleOccupationGroupInputChange = (event) => {
    SetOccupationGroup(event.target.value);
  }

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  }

  // a conditional to render, in combination with the counter function, the compontents one at a time

  if (count === 1) {
    return (
      <div className="form-container">
      <Welcome/>
      <button onClick={Counter}>START</button>
      </div>
    )
  } else if (count === 2) {
    return (
      <div className="form-container">
      <TextInput
        name={name}
        onNameInputChange={handleNameInputChange}
        Counter={Counter}
      />
      </div>
    )
  } else if (count === 3) {
    return (
      <div className="form-container">
        <CheckboxInput
        membership={membership}
        onMembershipInputChange={handleMembershipInputChange}
        Counter={Counter}
      />
      </div>
    )
  } else if (count === 4) {
    return (
      <div className="form-container">
      <SelectInput
        location={location}
        onLocationInputChange={handleLocationInputChange}
        Counter={Counter}
      />
      </div>
    )
  } else if (count === 5) {
    return (
      <div className="form-container">
      <RadioInput
        occupationGroup={occupationGroup}
        onOccupationGroupInputChange={handleOccupationGroupInputChange}
        Counter={Counter}
      />
      </div>
    )
  } else if (count === 6) {
    return (
      <div className="form-container">
        <EmailInput 
        email={email}
        onEmailInputChange={handleEmailInputChange}
        Counter={Counter}
        />
      </div>
    )
  } else {
    return (
      <div className="form-container">
      <Summary
        name={name} 
        membership={membership}
        location={location} 
        occupationGroup={occupationGroup}
        email={email}
      />
      <button onClick={() => window.location.reload()}>GOOD LUCK!</button>
      </div>
    )
  }
}
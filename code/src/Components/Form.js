import React, { useState } from "react";

import { Welcome } from "./Welcome";
import { TextInput } from "./TextInput"
import { CheckboxInput } from "./CheckboxInput";
import { SelectInput } from "./SelectInput";
import { RadioInput } from "./RadioInput";
import { EmailInput } from "./EmailInput";
import { Summary } from "./Summary";

export const Form = () => {
  const [count, setCount] = useState(1);
  const [name, SetName] = useState("");
  const [membership, SetMembership] = useState(false);
  const [location, SetLocation] = useState("");
  const [occupationGroup, SetOccupationGroup] = useState();
  const [email, setEmail] = useState("")

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
      />
      <button onClick={Counter}>NEXT</button>
      </div>
    )
  } else if (count === 3) {
    return (
      <div className="form-container">
        <CheckboxInput
        membership={membership}
        onMembershipInputChange={handleMembershipInputChange}
      />
      <button onClick={Counter}>NEXT</button>
      </div>
    )
  } else if (count === 4) {
    return (
      <div className="form-container">
      <SelectInput
        location={location}
        onLocationInputChange={handleLocationInputChange}
      />
      <button onClick={Counter}>NEXT</button>
      </div>
    )
  } else if (count === 5) {
    return (
      <div className="form-container">
      <RadioInput
        occupationGroup={occupationGroup}
        onOccupationGroupInputChange={handleOccupationGroupInputChange}
      />
      <button onClick={Counter}>NEXT</button>
      </div>
    )
  } else if (count === 6) {
    return (
      <div className="form-container">
        <EmailInput 
        email={email}
        onEmailInputChange={handleEmailInputChange}
        />
        <button onClick={Counter}>SUBMIT</button>
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
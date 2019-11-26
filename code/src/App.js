import React, { useState } from 'react'
import "./app.css"



export const App = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  const [ageGroup, setAgeGroup] = useState();

  const ageGroups = [
    "0-18",
    "19-30",
    "31+"
  ]

  return (
    <form onSubmit={event => event.preventDefault()}>
      <h1>Your name: {name}</h1>
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
      />
      <h2>Your location: {location}</h2>
      <select
        onChange={event => setLocation(event.target.value)}
        value={location}
      >
        <option value="">Select location:</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Barcelona">Barcelona</option>
        <option value="Oslo">Oslo</option>
      </select>
      <h2>Newsletter:</h2>
      <label>
        Newsletter?
  <input
          type="checkbox"
          checked={wantsNewsletter}
          onChange={event => setWantsNewsletter(event.target.checked)}
        />
      </label>

      <h2>Age Group:</h2>
      {ageGroups.map((group) => (
        <label key={group}>
          <input
            type="radio"
            value={group}
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === group}
          />
          {group}
        </label>
      ))}
    </form>
  );
};




// export const App = () => {
//     const [count, setCount] = useState(0);

//     return (
//       <div>
//         <p>You clicked {count} times</p>
//         <button onClick={() => setCount(count + 6)}>
//           Click me
//       </button>
//       </div>
//     )
//   }

/* <h2>Age Group:</h2>
<label>
  <input
    type="radio"
    value="0-18"
    onChange={event => setAgeGroup(event.target.value)}
    checked={ageGroup === "0-18"}
  />
  0-18
</label>
<label>
  <input
    type="radio"
    value="19-30"
    onChange={event => setAgeGroup(event.target.value)}
    checked={ageGroup === "19-30"}
  />
  19-30
</label>
<label>
  <input
    type="radio"
    value="31+"
    onChange={event => setAgeGroup(event.target.value)}
    checked={ageGroup === "31+"}
  />
  31+
</label> */
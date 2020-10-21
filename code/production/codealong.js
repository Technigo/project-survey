import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const App = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [ageGroup, setAgeGroup] = useState();
  const ageGroups = ["0-18", "19-25", "26-39", "40+"];

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h1>The state is: {name}</h1>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <div>
        <select
          onChange={(event) => setLocation(event.target.value)}
          value={location}
        >
          <option value="">Select Location</option>
          <option value="stockholm">Stockholm</option>
          <option value="oslo">Oslo</option>
          <option value="barcelona">Barcelona</option>
        </select>
      </div>

      <div>
        Age Group:
        {ageGroups.map((group) => (
          <label key={group}>
            <input
              type="radio"
              value={group}
              onChange={(event) => setAgeGroup(event.target.value)}
              checked={ageGroup === group}
            />
            {group}
          </label>
        ))}
      </div>
      <div>
        <label>
          Newsletter?
          <input
            type="checkbox"
            checked={subscribe}
            onChange={(event) => setSubscribe(event.target.checked)}
          />
        </label>
      </div>
    </form>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

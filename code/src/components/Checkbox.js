import React, { useState } from "react";

const Checkbox = () => {
  const [howMuch, setHowMuch] = useState(false);

  return (
    <form>
        How much do you usually spend on local live gigs each month? 
      <label htmlFor="0-200">
        <input
          id="0-200"
          type="checkbox"
          unchecked={howMuch}
          onChange={(event) => setHowMuch(event.target.checked)}
        />
      </label>
      0-200 kr

      <label htmlFor="200-400">
        <input
          id="200-400"
          type="checkbox"
          unchecked={howMuch}
          onChange={(event) => setHowMuch(event.target.checked)}
        />
      </label>
      200-400 kr

      <label htmlFor="400-600 kr">
        <input
          id="400-600"
          type="checkbox"
          unchecked={howMuch}
          onChange={(event) => setHowMuch(event.target.checked)}
        />
      </label>
      400-600 kr

      <label htmlFor="600-800">
        <input
          id="600-800"
          type="checkbox"
          unchecked={howMuch}
          onChange={(event) => setHowMuch(event.target.checked)}
        />
      </label>
      600-800 kr

      <label htmlFor="1000">
        <input
          id="1000"
          type="checkbox"
          unchecked={howMuch}
          onChange={(event) => setHowMuch(event.target.checked)}
        />
      </label>
      Over 1000 kr

    </form>
  );
};

export default Checkbox;
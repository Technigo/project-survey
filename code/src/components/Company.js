import react, { useState } from "react";
import { App } from "App";
import { useState } from "react/cjs/react.production.min";

const travelStyle = ["with friends", "with my pet", "with family", "solo trip"];

const Company = () => {
  const [travelStyle, setTravelStyle] = useState();

  return (
    <form>
      Who will you travel with?
      {travelStyle.map((style) => (
        <label key={style}>
          <input
            type="radio"
            value={style}
            onChange={(event) => setTravelStyle(event.target.value)}
            checked={travelStyle === style}
          />
        </label>
      ))}
    </form>
  );
};

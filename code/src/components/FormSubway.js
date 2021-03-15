import React, { useState } from "react";

export const FormSubway = () => {
  const [subway, setSubway] = useState(false);

  return (
    <div className="each-question">
      <form>
        <label>
          It's important that I am close to public transportation:
          <input
            type="checkbox"
            checked={subway}
            onChange={(event) => setSubway(event.target.checked)}
          />
          Yes
        </label>
      </form>
    </div>
  );
};

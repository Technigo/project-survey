import React from "react";
import { useState } from "react";

const Newsletter = () => {
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  return (
    <form>
      <label>
        Newsletter?
        <input
          type="checkbox"
          checked={wantsNewsletter}
          onChange={(event) => setWantsNewsletter(event.target.checked)}
        />
      </label>
    </form>
  );
};

export default Newsletter;

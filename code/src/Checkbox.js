import React, { useState } from "react";


export const Checkbox = () => {
  const [agree, setAgree] = useState(false);
  const [accept, setAccepts]= useState(false);

  return (
    <form>
      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={event => setAgree(event.target.checked)}
        />I agree to terms & conditions
      </label>
      <label>
        <input
          type="checkbox"
          checked={accept}
          onChange={event => setAccepts(event.target.checked)}
        />I accept use of my data for the service and everything else descriped in the privacy policy
      </label>
    </form>
  );
};

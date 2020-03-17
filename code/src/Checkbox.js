import React, { useState } from "react";


export const Checkbox = () => {
  const [agree, setAgree] = useState(false);
  const [accept, setAccepts]= useState(false);

  return (
    <form>
      <label>
        I agree to terms & conditions
        <input
          type="checkbox"
          checked={agree}
          onChange={event => setAgree(event.target.checked)}
        />
      </label>
      <label>
        I accept use of my data for the service and everything else descriped in the <p>privacy policy</p>
        <input
          type="checkbox"
          checked={accept}
          onChange={event => setAccepts(event.target.checked)}
        />
      </label>
    </form>
  );
};

import React, { useState } from 'react';



export const Checkboxes = () => {
  const [wantsJob1, setWantsJob1] = useState(false);
  const [wantsJob2, setWantsJob2] = useState(false);

  return (
    <form>
      <label>
        Do you want to apply for the job now?
        <input
          type="checkbox"
          checked={wantsJob1}
          onChange={event => setWantsJob1(event.target.checked)}
        />
      </label>
      <label>
        Do you want to apply for the job later?
        <input
          type="checkbox"
          checked={wantsJob2}
          onChange={event => setWantsJob2(event.target.checked)}
        />
      </label>


    </form>
  );
};
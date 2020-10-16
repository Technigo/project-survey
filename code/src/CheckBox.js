import React, {useState} from 'react';

export const CheckBox = () => {
  const [wantsNewsLetter, setWantsNewsLetter] = useState(false);

  return (
<div className="checkbox-container">
      <label>Newsletter?</label>
      <input
        type="checkbox"
        checked={wantsNewsLetter}
        onChange={(event) => setWantsNewsLetter(event.target.checked)}
      />
</div>
  );
};
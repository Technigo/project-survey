import React from 'react';


export const SureQuestion = ({ sure, setSure}) => {
    const areYouSure = ["Yep! Pretty sure.", "Dunno", "Maybe not"];

    return (
      <div>
        <h2>Is it really your favourite?</h2>
        {areYouSure.map(sure => (
          <label tabIndex="0">
            <input
              type="radio"
              value={sure}
              onChange={(event) =>  setSure(event.target.value)}
            />
            {sure}
          </label>
        ))}
        </div> 
    );
}

// Something is wrong in this function but I can't figure it out 

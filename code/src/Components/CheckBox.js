import React, { useState } from 'react';

const CheckBox = () => {
  const [wantsMember, setWantsMember] = useState(false);

  return (
    <form className="section">
      <label className="label">
        First of all, would you like to be a member in our new movies-for-geeks-club? If yes, tick this box:  
        <input
          type="checkbox"
          checked={wantsMember}
          onChange={(event) => setWantsMember(event.target.checked)}
        />
      </label>
    </form>
  );
};

export default CheckBox





// export const Counter = (props) => {
//     return (
//         <div>
//         <p>My current count {props.counter}</p>
//         <button onClick={() =>props.setCounter(props.counter + 1)}>increase counter</button>
//         <button onClick={() =>props.setCounter(props.counter - 1)}>decrease counter</button>
//       </div>
//     )

// }
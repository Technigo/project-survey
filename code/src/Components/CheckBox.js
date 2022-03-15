import React, { useState } from 'react';



export const CheckBox = () => {
  const [wantsNewsletter, setWantsNewsletter] = useState(false);

  return (
    <form>
      <label>
        Newsletter?
        <input
          type="checkbox"
          checked={wantsNewsletter}
          onChange={event => setWantsNewsletter(event.target.checked)}
        />
      </label>
    </form>
  );
};





// export const Counter = (props) => {
//     return (
//         <div>
//         <p>My current count {props.counter}</p>
//         <button onClick={() =>props.setCounter(props.counter + 1)}>increase counter</button>
//         <button onClick={() =>props.setCounter(props.counter - 1)}>decrease counter</button>
//       </div>
//     )

// }
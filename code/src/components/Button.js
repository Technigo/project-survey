import React, {useState } from 'react';

export const Button = () => {
  const [count, setCount] = useState(0);

  return (
  <div>
    <button onClick={() => setCount(count +1)}>
      Clicking time!    
    </button>
    <p>The button is clicked {count} times.</p>
  </div>
)
}
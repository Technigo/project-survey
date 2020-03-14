import React, { useState } from 'react';


const sizes = ["XS", "S", "M", "L", "XL"]
export const Radiobuttons = () => {
  const [sizeGroup, setsizeGroup] = useState();

  return (
    <form>
      Size
      {sizes.map(size => (
        <label key={size}>
          <input
            type="radio"
            value={size}
            onChange={event => setsizeGroup(event.target.value)}
            checked={sizeGroup === size}
          />
          {size}
        </label>
      ))}
    </form>
  );
};

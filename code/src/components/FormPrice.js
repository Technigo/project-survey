import React, { useState } from "react";

const priceChoices = [
  "1-3000kr/month",
  "3000-5000kr/month",
  "5000-8000kr/month",
  "8000-10 000kr/month",
  "10 000-13 000 kr/month",
];

export const FormPrice = () => {
  const [price, setPrice] = useState();

  return (
    <div className="each-question">
      <form>
        Size:
        {priceChoices.map((choice) => (
          <label key={choice}>
            <input
              type="radio"
              value={choice}
              onChange={(event) => setPrice(event.target.value)}
              checked={price === choice}
            />
            {choice}
          </label>
        ))}
      </form>
    </div>
  );
};

/* <form>
<label>
<input
  type="radio"
  value="S = 1 scoop"
  onChange={(event) => setSize(event.target.value)}
  checked={size === "S = 1 scoop"}
/>
S = 1 scoop
</label>
<label>
<input
  type="radio"
  value="M = 2 scoops"
  onChange={(event) => setSize(event.target.value)}
  checked={size === "M = 2 scoops"}
/>
M = 2 scoops
</label>
<label>
<input
  type="radio"
  value="L = 3 scoops"
  onChange={(event) => setSize(event.target.value)}
  checked={size === "L = 3 scoops"}
/>
L = 3 scoops
</label>
</form> */

import React from "react";

const FirstQue = ({ FavoriteInput, FavoriteInputChange, Change }) => {
  return (
    <form>
      <label>
        <p>What's your favorite season? </p>
        <input
          type="radio"
          value="Spring🌸🌸 "
          onChange={() => FavoriteInputChange("Spring 🌸🌸")}
        />
        <span>Spring-I love the flowers blooming </span>
      </label>
      <label>
        <p> What's your favorite season?</p>
        <input
          type="radio"
          value="Summer☀️"
          onChange={() => FavoriteInputChange("Summer☀️")}
        />
        <span>Summer- bring on the sunshine! </span>
      </label>
      <label>
        <p> What's your favorite season? </p>
        <input
          type="radio"
          value="Fall🍁"
          onChange={() => FavoriteInputChange("Fall🍁")}
        />
        <span>Autumn- Love the golden falling leaves </span>
      </label>
      <label>
        <p> What's your favorite season? </p>
        <input
          type="radio"
          value="Winter❄️"
          onChange={() => FavoriteInputChange("Winter❄️")}
        />
        <span>Winter- Cozy fireplace and Hot chocolate drinks </span>
      </label>

      <button onClick={Change}>➤</button>
    </form>
  );
};

export default FirstQue;

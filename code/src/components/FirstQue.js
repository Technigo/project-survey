import React from "react";

const FirstQue = ({ FavoriteInput, FavoriteInputChange, Change }) => {
  return (
    <div class="container">
      <h2> What's your favorite season? </h2>
      <form className="form-container">
        <label className="first-que">
          <input
            type="radio"
            value="Spring🌸🌸 "
            onChange={() => FavoriteInputChange("Spring 🌸🌸")}
          />
          <span>Spring-I love the flowers blooming </span>
        </label>
        <label className="first-que">
          <input
            type="radio"
            value="Summer☀️"
            onChange={() => FavoriteInputChange("Summer☀️")}
          />
          <span>Summer- bring on the sunshine! </span>
        </label>
        <label className="first-que">
          <input
            type="radio"
            value="Fall🍁"
            onChange={() => FavoriteInputChange("Fall🍁")}
          />
          <span>Autumn- Love the golden falling leaves </span>
        </label>
        <label className="first-que">
          <input
            type="radio"
            value="Winter❄️"
            onChange={() => FavoriteInputChange("Winter❄️")}
          />
          <span>Winter- Cozy fireplace and Hot chocolate drinks </span>
        </label>

        <button onClick={Change} className="button">
          Continue ➤
        </button>
      </form>
    </div>
  );
};

export default FirstQue;

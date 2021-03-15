import React, { useState } from 'react';

const ingredients = [
  "salmon",
  "tuna",
  "shrimp",
  "crabstick",
  "avocado",
  "egg"
];

const Question3 = () => {
  const [ingredient, setIngredient] = useState('');
  
  const handleChange = (e) => {
    setIngredient(e.target.value);
  };

  return (
    <>
      <div>
        <p>Favourite ingredient in sushi?</p>

        {ingredients.map((ingred) => (
          <label key={ingred} htmlFor={ingred}>
            <input 
              id={ingred}
              type="radio"
              value={ingred}
              onChange={handleChange}
              checked={ingredient === ingred} 
            />
            {ingred}
          </label>
        ))}
      </div>
    </>
  )
}

export default Question3;
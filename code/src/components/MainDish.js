import React, { useState } from 'react'

const MainDish = () => {
    const [dish, setDish] = useState('');

    const onDishChange= (e) => {
        console.log(`Dish: ${e.target.value}`);
        setDish(e.target.value);
    }

    return (
        <form className="main-dish">
          <div>
            <label htmlFor="dish">Select your favorite main dish</label>
            <select onChange={onDishChange} id="dish" value={dish} >
            <option disabled>Pick one</option>
              <option>Pasta</option>
              <option>Meat</option>
              <option>Seitan</option>
              <option>Chicken</option>
            </select>
          </div>
        </form>
    );
};

export default MainDish;
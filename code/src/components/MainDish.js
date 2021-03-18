import React, { useState } from 'react'

const MainDish = () => {
    const [dish, setDish] = useState('');

    const onDishChange= (e) => {
        console.dir(e);
        setDish(e.target.value);
    }

    return (
        <form>
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
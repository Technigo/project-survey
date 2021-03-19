import React, { useState } from 'react'

const SideDish = () => {
    const [dish2, setDish2] = useState('');

    const onDish2Change= (e) => {
        console.log(`Dish2: ${e.target.value}`);
        setDish2(e.target.value);
    }

    return (
        <form className="side-dish">
          <div>
            <label htmlFor="dish2">And now let's choose you a side dish</label>
            <select id="dish2" onChange={onDish2Change}  value={dish2} >
              <option>French fries</option>
              <option>Beans and onion salad</option>
              <option>Leafy greens</option>
              <option>Peas and carrots</option>
            </select>
          </div>
        </form>
    );
};

export default SideDish;

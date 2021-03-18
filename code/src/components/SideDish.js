import React, { useState } from 'react'

const SideDish = () => {
    const [dish2, setDish2] = useState('');

    const onDish2Change= (e) => {
        console.dir(e);
        setDish2(e.target.value);
    }

    return (
        <form>
          <div>
            <label htmlFor="dish2">And now let's choose you a side dish</label>
            <select onChange={onDish2Change} id="dish2" value={dish2} >
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

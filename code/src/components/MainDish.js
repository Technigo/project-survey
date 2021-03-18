import React from 'react'

const MainDish = () => {

    return (
        <form>
          <div>
            <label>Select your favorite main dish</label>
            <select>
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
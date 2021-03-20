import React from 'react'

const MainDish = ({label, mainDish, onMainDishChange}) => {
   
    return (
        <div className="main-dish">
            <label htmlFor="mainDish">
              <h1 tabindex="0" className='maindish-text'>What is your favorite main dish?</h1>
              </label>
            <select 
                className='maindish-menu'
                name={label}
                value={mainDish}
                onChange={onMainDishChange}
                >
                 <option>pasta</option>
                 <option>meat</option>
                 <option>seitan</option>
                 <option>chicken</option>
            </select>
          </div>
    );
};

export default MainDish;
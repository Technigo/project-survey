import React from 'react'

const SideDish = ({label, sideDish, onSideDishChange}) => {
    

    return (
          <div className='side-dish'>
            <label htmlFor="sideDish">
              <h1 tabIndex="0" className='sidedish-text'>And now let's choose you a side dish</h1>
            </label>
            <select 
            className='sidedish-menu'
              name={label}
              value={sideDish}
              onChange={onSideDishChange}
              >
              <option>french fries</option>
              <option>beans and onion salad</option>
              <option>leafy greens</option>
              <option>peas and carrots</option>
            </select>
          </div>    
    );
};

export default SideDish;

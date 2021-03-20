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
              <option>French fries</option>
              <option>Beans and onion salad</option>
              <option>Leafy greens</option>
              <option>Peas and carrots</option>
            </select>
          </div>    
    );
};

export default SideDish;

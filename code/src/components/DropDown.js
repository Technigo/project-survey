import React from 'react'

const DropDown = ({favorite, setFavorite}) => {
 
  
return (
  <div className='drop-down-box'>
    <h3 className='p-drop-down-box'tabIndex='0'>What flavor rock your boat &#38; get your brain freeze on?!</h3>
    <label className='pick-favorite'tabIndex='0'>Pick your favorite:</label>
    <select className='pick-field'
    onChange={event => setFavorite(event.target.value)}
    required
    aria-label='Select a flavor'
    value={favorite}
    >
      <option disabled aria-label='Choose a flavor from the dropdown menu'></option>
      <option className='opt-po'value='Polka'>Polka</option>
      <option value='Pineapple'>Pineapple</option>
      <option value='Salty Licorice'>Salty Licorice</option>
      <option value='Creamy Fudge'>Creamy Fudge</option>
      <option value='Nuts &#38;Crunch'> Nuts &#38; Crunch</option>
      <option value='All of the above'>All of the above!</option>
    </select>
  </div>
)
}


export default DropDown;

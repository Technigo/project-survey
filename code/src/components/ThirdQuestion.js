import React from 'react' 

import NextButton from 'components/NextButton'

const places = [
  'in the library',
  'while commuting',
  'in the park',
  'at home',
  'in a group'
]

const ThirdQuestion = (props) => {

  const onPlaceChange = (e) => {
    props.setFavoritePlace(e.target.value)
  }

  return (
      <div className="question-container" aria-label="Favorite place to read: 5 options">
        <h1 className="question-header">Favorite place to read?</h1>
        {places.map(place => {
          return (
            <div className="radio-container" key={place}>
              <label htmlFor="place">
                <input
                  name="place"
                  type='radio'
                  value={place}
                  onChange={onPlaceChange}
                  checked = {props.place === place}
                  required 
                />
                {place}
              </label>
            </div>
          )}
        )}
        <NextButton />
      </div>
  )
}

export default ThirdQuestion
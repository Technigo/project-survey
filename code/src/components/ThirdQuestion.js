import React from 'react' 

const places = [
  'in the library',
  'while commuting',
  'in the park',
  'at home',
  'in a group', 
  'other'
]

const ThirdQuestion = (props) => {

  const onPlaceChange = (e) => {
    props.setFavoritePlace(e.target.value)
    console.log(e.target.value)
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div role="radiogroup" aria-label="Favorite place to read: 5 options">
        <h1>Were is your favorite place to read?</h1>
        {places.map(places => (
        <div className="radio-container" key={places}>
          <input
          type='radio'
          value={places}
          onChange={onPlaceChange}
          checked={props.place === places}
          required 
          />
          {places}
        </div>
      ))}
      </div>
    </form>
)
}

export default ThirdQuestion
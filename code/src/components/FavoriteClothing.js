import React from 'react';

const FavoriteClothing = ({ setFavClothes }) => {
  return (
    <div className="question-wrapper">
      <fieldset>
        <label htmlFor="favorite-clothing">What is your favorite piece of clothing?
          <select className="input-field" name="favorite-clothing" required onChange={(event) => setFavClothes(event.target.value)}>
            <option defaultValue={null}> </option>
            <option id="favorite-clothing" value="socks">Socks</option>
            <option id="favorite-clothing" value="long pants">Long pants</option>
            <option id="favorite-clothing" value="shorts">Shorts</option>
            <option id="favorite-clothing" value="underwear">Underwear</option>
            <option id="favorite-clothing" value="t-shirt">T-shirt</option>
            <option id="favorite-clothing" value="sweatshirt">Sweatshirt</option>
            <option id="favorite-clothing" value="hat">Hat</option>
            <option id="favorite-clothing" value="skirt">Skirt</option>
            <option id="favorite-clothing" value="dress">Dress</option>
            <option id="favorite-clothing" value="tie">Tie</option>
          </select>
        </label>
      </fieldset>
    </div>
  )
}

export default FavoriteClothing;
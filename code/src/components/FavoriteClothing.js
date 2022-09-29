import React from 'react';

const FavoriteClothing = ({ setFavClothes }) => {
  return (
    <label htmlFor="favorite-clothing">What is your favorite piece of clothing?
      <select name="favorite-clothing" onChange={(event) => setFavClothes(event.target.value)}>
        <option value=" "> </option>
        <option value="socks">Socks</option>
        <option value="long pants">Long pants</option>
        <option value="shorts">Shorts</option>
        <option value="underwear">Underwear</option>
        <option value="t-shirt">T-shirt</option>
        <option value="sweatshirt">Sweatshirt</option>
        <option value="hat">Hat</option>
        <option value="skirt">Skirt</option>
        <option value="dress">Dress</option>
        <option value="tie">Tie</option>
      </select>
    </label>
  )
}

export default FavoriteClothing;
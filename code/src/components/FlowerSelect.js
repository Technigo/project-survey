import React from 'react';
// eslint-disable-next-line indent
        // eslint-disable-next-line indent

export const FlowerSelect = ({ flowerSelect, setFlowerSelect }) => {
  return (
    <form>
      <p>Your favourite flower?</p>
      <select
        value={flowerSelect}>
        <input type="radio" value="cherry-blossom" id="cherry-blossom" onChange={(event) => setFlowerSelect(event.target.value)} checked={flowerSelect === 'cherry-blossom'} />
        <label htmlFor='cherry-blossom'>Cherry-blossom</label>
        <input type="radio" value="change" id="change" onChange={(event) => setFlowerSelect(event.target.value)} checked={flowerSelect === 'change'} />
        <input type="radio" value="cherry-blossom" id="cherry-blossom" onChange={(event) => setFlowerSelect(event.target.value)} checked={flowerSelect === 'cherry-blossom'} />
        <input type="radio" value="cherry-blossom" id="cherry-blossom" onChange={(event) => setFlowerSelect(event.target.value)} checked={flowerSelect === 'cherry-blossom'} />
      </select>
    </form>
  )
}

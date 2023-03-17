import React from 'react';
// eslint-disable-next-line indent
        // eslint-disable-next-line indent
export const FlowerSelect = ({ flowerSelect, setFlowerSelect }) => {
  return (
    <form className="content-wrapper">
      <p>Your favourite flower?</p>
      <select
        value={flowerSelect}>
        <input type="radio" value="cherry-blossom" id="cherry-blossom" onChange={(event) => setFlowerSelect(event.target.value)} checked={flowerSelect === 'cherry-blossom'} />
        <label htmlFor="cherry-blossom">Cherry-blossom</label>
        <input type="radio" value="cherry-blossom" id="cherry-blossom" onChange={(event) => setFlowerSelect(event.target.value)} checked={flowerSelect === 'change'} />
        <input type="radio" value="cherry-blossom" id="cherry-blossom" onChange={(event) => setFlowerSelect(event.target.value)} checked={flowerSelect === 'cherry-blossom'} />
        <input type="radio" value="cherry-blossom" id="cherry-blossom" onChange={(event) => setFlowerSelect(event.target.value)} checked={flowerSelect === 'cherry-blossom'} />
      </select>
    </form>
  )
}

/* const flowerSelect = ["lily", "dandelion", "laverder"];

return (
  <form>
    Flower:
    {flowerSelect.map(group => (
      <label key={group}>
        <input
        type="radio"
        value={group}
        onChange={event => setAgeGroup(event.target.value)}
        checked={flowerSelect === "lily"}
        />
        </label>
    ))}

  </form>
 ) */
   

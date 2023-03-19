/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
// eslint-disable-next-line indent
        // eslint-disable-next-line indent
export const FlowerSelect = ({ flowerSelect, setFlowerSelect }) => {
  return (
    <div className="content-wrapper">
      <p>Pick the one flower that makes you wanna inhale the deepest 🦋 </p>

    <form>
        <input
          type="radio"
          id="cherry-blossom"
          value="cherry-blossom"
          onChange={(event) => setFlowerSelect(event.target.value)}
          checked={flowerSelect === 'cherry-blossom'} />
        <label className="flower" htmlFor="cherry-blossom">Cherry-Blossom</label>

        <input
        type="radio"
        id="lily"
        value="lily"
        onChange={(event) => setFlowerSelect(event.target.value)}
        checked={flowerSelect === 'lily'} />
        <label className="flower" htmlFor="lily">Lily</label>

        <input 
        type="radio" 
        id="dandelion" 
        value="dandelion" 
        onChange={(event) => setFlowerSelect(event.target.value)} 
        checked={flowerSelect === 'dandelion'} />
        <label className="flower" htmlFor="Dandelion">Dandelion</label>

        <input 
        type="radio" 
        id="lavender" 
        value="lavender" 
        onChange={(event) => setFlowerSelect(event.target.value)} 
        checked={flowerSelect === 'lavender'} />
        <label className="flower" htmlFor="lavender">Lavender</label>

    </form>
    </div>
  )
}

/*  const flowerSelect = ["lily", "dandelion", "laverder"];

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
 )  */

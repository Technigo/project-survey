import React from 'react';
// eslint-disable-next-line indent
        // eslint-disable-next-line indent
export const FlowerSelect = ({ flowerSelect, setFlowerSelect }) => {
  return (
    <form className="content-wrapper">
      <p>Your favourite flower?</p>
      <div>
        <input type="radio" id="cherry-blossom" value="cherry-blossom" onChange={(event) => setFlowerSelect(event.target.value)} checked={flowerSelect === 'cherry-blossom'} />
        <label htmlFor="cherry-blossom">Cherry-blossom</label>
      </div>
      <div>
        <input type="radio" id="lily" value="lily" onChange={(event) => setFlowerSelect(event.target.value)} checked={flowerSelect === 'lily'} />
        <label htmlFor="lily">Lily</label>
      </div>
      <div>
        <input type="radio" id="dandelion" value="dandelion" onChange={(event) => setFlowerSelect(event.target.value)} checked={flowerSelect === 'dandelion'} />
        <label htmlFor="dandelion">Dandelion</label>
      </div>
      <div>
        <input type="radio" id="lavender" value="lavender" onChange={(event) => setFlowerSelect(event.target.value)} checked={flowerSelect === 'lavender'} />
        <label htmlFor="lavender">Lavender</label>
      </div>
    </form>
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

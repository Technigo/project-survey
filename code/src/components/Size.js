import React from 'react'

const sizes = ['XS', 'S', 'M', 'L', 'XL']

export const Size = ({ size, setSize }) => {
  const handleSizeChange = (event) => {
    setSize(event.target.value)
  }
  return (
    <div className="size-container">
      <p>What dog size would you prefer to adopt?</p>
      <form>
        {sizes.map((singleSize) => (
          <label htmlFor="size" key={singleSize}>
            <input type="radio" className="size-input" value={singleSize} checked={singleSize === size} onChange={handleSizeChange} />{singleSize}
          </label>
        ))}
      </form>
    </div>
  );
}

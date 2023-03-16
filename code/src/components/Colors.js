import React from 'react'
import '../index.css';

export const Colors = ({ colors, setColors }) => {
  const shrimpColor = [
    { label: 'crystal red', value: 'red', name: 'crystal red shrimp', imgSrc: '/assets/red.jpg' },
    { label: 'blue', value: 'blue', name: 'blue shrimp', imgSrc: '/assets/blue.jpg' },
    { label: 'zebra', value: 'zebra', name: 'zebra shrimp', imgSrc: '/assets/zebra.jpg' },
    { label: 'orange', value: 'orange', name: 'orange shrimp', imgSrc: 'assets/orange.jpg' },
    { label: 'random mix', value: 'random', name: 'random shrimp', imgSrc: '/assets/random.jpg' }
  ];

  const handleColors = (event) => {
    const selectedColor = shrimpColor.find((color) => color.value === event.target.value);
    setColors(selectedColor)
  }
  return (
    <div className="color-container">
      <p>What color of shrimp would you like?</p>
      <form>
        <select
          onChange={handleColors}
          value={colors}>
          <option value="" disabled>Select color</option>
          {shrimpColor.map((color) => <option value={color.value}>{color.label}</option>)}
        </select>
      </form>
    </div>
  )
}
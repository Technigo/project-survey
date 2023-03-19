/* eslint-disable indent */
import React from 'react'
import '../index.css';

export const Colors = ({ colors, setColors }) => {
  const shrimpColor = [
    { label: 'crystal red', value: 'red', name: 'red', imgSrc: '/assets/red.jpg' },
    { label: 'blue', value: 'blue', name: 'blue', imgSrc: '/assets/blue.jpg' },
    { label: 'zebra', value: 'zebra', name: 'zebra', imgSrc: '/assets/zebra.jpg' },
    { label: 'orange', value: 'orange', name: 'orange', imgSrc: '/assets/orange.jpg' },
    { label: 'random mix', value: 'random', name: 'random', imgSrc: '/assets/random.jpg' }
  ];

  const handleColors = (event) => {
    const selectedColor = shrimpColor.find((color) => color.value === event.target.value);
    setColors(selectedColor)
  }
  return (
    <div>
      <form>
        <label htmlFor="color" className="label">What color of shrimp would you like?
        <select
          name="color"
          onChange={handleColors}
          value={colors.value}>
          <option value="" disabled>Select color</option>
          {shrimpColor.map((color) => <option key={color.value} value={color.value}>
            {color.label}
                                      </option>)}
        </select>
        </label>
      </form>
    </div>
  )
}
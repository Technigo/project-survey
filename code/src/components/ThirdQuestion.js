import React from 'react';
import { Button } from 'components/button';

export const ThirdQuestion = ({ thing, setThing }) => {
  const handleFavoriteThing = (event) => {
    setThing(event.target.value)
  }
  return (
    <>
      <label htmlFor="favoriteThing">
        What is your favorite thing about traveling?
        <select
          id="favoriteThing"
          onChange={handleFavoriteThing}
          value={thing}
          required>
          <option value="">Select your favorite thing:</option>
          <option value="new-people">meeting new people</option>
          <option value="new-places">seeing new places</option>
          <option value="cultures">learn about other cultures</option>
          <option value="cuisine">the cuisine</option>
          <option value="adventure">adventure</option>
          <option value="weather">the weather</option>
        </select>
      </label>
      <Button button="Next question" />
    </>
  )
}
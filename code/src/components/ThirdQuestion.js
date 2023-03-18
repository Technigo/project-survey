import React from 'react';
import { Button } from 'components/button';

export const ThirdQuestion = ({ favoriteThing, setThing }) => {
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
          value={favoriteThing}
          required>
          <option value="">Select your favorite thing:</option>
          <option value="meeting new people">meeting new people</option>
          <option value="seeing new places">seeing new places</option>
          <option value="learn about the cultures">learn about other cultures</option>
          <option value="the cuisine">the cuisine</option>
          <option value="adventure">adventure</option>
          <option value="the weather">the weather</option>
        </select>
      </label>
      <Button button="Next question" />
    </>
  )
}
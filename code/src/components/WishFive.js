import React from 'react';

export const WishFive = ({ wish, setWish }) => {
  const handleWishChange = (event) => {
    setWish(event.target.value);
  }
  return (
    <form>
      <p>Do you wish to use your bike more than you do today?</p>
      <input
        type="text"
        onChange={handleWishChange}
        Value={wish} />
    </form>
  )
}
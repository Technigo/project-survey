import React from 'react';

export const FavouritePlace = ({ favouriteplace, setFavouritePlace }) => {
    const handleFavouritePlaceChange = (event) => {
        setFavouritePlaceChange(event.target.value);
    }
}
return (
    <>
    <p>Wich place in the world do you wanna be at right now?</p>
    <input type="text" value={favouritePlace} onChange={handleFavouritePlaceChange} />
    </>
)
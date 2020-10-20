import React, { useState } from "react"

export const Text = () => {
    const [favouriteAuthor, setFavouriteAuthor] = useState("");

    return (
        <>
            <input
                type="text"
                onChange={event => setFavouriteAuthor(event.target.value)}
                value={favouriteAuthor}
            />
        </>
    )
}
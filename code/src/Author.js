import React from "react"

export const Author = ( { favAuthor, onFavouriteAuthorChange }) => {
    return (
        <>
            <label>
                "Who is your favourite author?"
                <input
                    type="text"
                    onChange={event => onFavouriteAuthorChange(event.target.value)}
                    value={favAuthor}
                />
            </label>
        </>
    )
}
import React from "react"

export const Author = ( { favAuthor, onFavouriteAuthorChange }) => {
    return (
        <>
            <section className="question">
                <label>
                    Who is your favourite author?
                    <input
                        type="text"
                        onChange={event => onFavouriteAuthorChange(event.target.value)}
                        value={favAuthor}
                    />
                </label>
            </section>
        </>
    )
}
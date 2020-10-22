import React from "react"

export const Author = ( { favAuthor, onFavouriteAuthorChange }) => {
    return (
        <>
            <section className="question">
                <label className="text-question">
                    Who is your favourite author?
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Type..."
                        onChange={event => onFavouriteAuthorChange(event.target.value)}
                        value={favAuthor}
                    />
                </label>
            </section>
        </>
    )
}
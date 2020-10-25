import React from "react"

export const Author = ( { favAuthor, onFavouriteAuthorChange }) => {
    return (
        <>
            <section className="question">
                <label htmlFor="author" className="text-question">
                    Who is your favourite author?
                    <input
                        id="author"
                        className="text-input"
                        type="text"
                        placeholder="Type..."
                        onChange={event => onFavouriteAuthorChange(event.target.value)}
                        value={favAuthor}
                        required
                    />
                </label>
            </section>
        </>
    )
}
import React from "react"

const SubmitBook = ({
    nextQuestion,
    submitBook,
    setSubmitBook
}) => {
    const onSubmitBook = (event) => {
        setSubmitBook(event.target.value)
        event.preventDefault()
        nextQuestion()
    }
    return (
        <form className="form-suggest-book">
            <label htmlFor="title">Title
            <input
                type="text"
                name="title"
            />
            </label>

            <label htmlFor="author">Author
            <input
                type="text"
                name="author"
            />
            </label>

            <label htmlFor="isbn">ISBN
            <input
                type="text"
                name="ISBN"
            />
            </label>
            <button onClick={onSubmitBook}>SUBMIT</button>
        </form>

    )
}

export default SubmitBook
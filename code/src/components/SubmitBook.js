import React from "react"

const SubmitBook = (props) => {
    const { nextQuestion, title, setTitle, author,
        setAuthor, isbn, setIsbn } = props

    const onTitleChange = (event) => {
        setTitle(event.target.value)
        event.preventDefault()
    }
    const onAuthorChange = (event) => {
        setAuthor(event.target.value)
        event.preventDefault()
    }
    const onIsbnChange = (event) => {
        setIsbn(event.target.value)
        event.preventDefault()
    }

    return (
        <form onSubmit={nextQuestion} className="form-suggest-book main-card">
            <label className="title" htmlFor="title">Title
                <input
                    onChange={onTitleChange}
                    type="text"
                    name="title"
                    value={title}
                />
            </label>

            <label className="author" htmlFor="author">Author
                <input
                    onChange={onAuthorChange}
                    type="text"
                    name="author"
                    value={author}
                />
            </label>

            <label className="isbn" htmlFor="isbn">ISBN
                <input
                    onChange={onIsbnChange}
                    type="text"
                    name="isbn"
                    value={isbn}
                />
            </label>
            <button className="submit-book-btn" onClick={nextQuestion}>SUBMIT</button>
        </form>

    )
}

export default SubmitBook
import React, { useState } from "react"


export const TextField = (props) => {

    const [book, setBook] = useState('')

    return (
        <section>
            {props.count < 3 &&
                <label>
                    What is your favourite book?
     <input required type="text" value={book} onChange={(event) => setBook(event.target.value)} />
                </label>

            }
            {props.count === 3 &&
                <p>Your favourite book is: {book}</p>}
        </section>
    )

}
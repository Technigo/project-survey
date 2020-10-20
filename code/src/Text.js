import React, { useState } from 'react'

const Text = () => {
    const [name, setName] = useState('')
    return (
        <section>
        <form>
            <label htmlFor="related-text"> Text visible before textbox </label>
            <input
                type="text"
                name="related-text"
                onChange={(event) => setName(event.target.value)}
                value={name}
            />
        </form>
        </section>)
}

export default Text
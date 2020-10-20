import React, { useState } from 'react'

const Text = () => {
    const [name, setName] = useState('')
    return (
        <form>
            <input
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name}
            />
        </form>)
}

export default Text
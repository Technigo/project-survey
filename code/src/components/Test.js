import React, { useState } from 'react'

const Test = () => {

    // const [nameInput, setNameInput] = useState('')
    const [temperature, setTemperature] = useState(20)


return (
    // <div>nameInput={nameInput}</div>
    <div><h1>Current temperature: {temperature} degrees</h1>

    <button onClick={() => setTemperature(-5)}>Freeze</button>
    <button onClick={() => setTemperature(40)}>Not Freeze</button>

    {temperature > 20 && <p>hot hot</p>}
    
    </div>
)
}

export default Test
import React, {useState} from 'react'


export const ListInput = () => {
    const [adjective, setAdjective] = useState("");

    return (
        <div>
            <h2>{adjective}</h2>
            <select
            onChange={event => setAdjective(event.target.value)}
            value={adjective}
            >
                <option value="">What are cats?</option>
                <option value="cute">Cute</option>
                <option value="adorable">Adorable</option>
            </select>
        </div>
    )
}
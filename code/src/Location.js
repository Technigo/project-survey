import React from "react"

export const Location = ({adress, setAdress, city, setCity}) => {
    return (
        <label className="Label" id="QAdress">
            <h3>Street name and number:</h3>
            <input
                type="text"
                value={adress}
                id={adress}
                onChange={event => setAdress(event.target.value)}
            />
        
        
            <select onChange={event => setCity(event.target.value)}
                value={city} 
                id={city}
                required
            >
            <option value="">Select Your City Here</option>/option>
            <option value="stockholm">Stockholm</option>
            <option value="Gothenburg">Gothenburg</option>
            <option value="Kiruna">Kiruna</option>
            </select>
        </label>
        
    )
}






import React from 'react';

export const Version = ({ version, setVersion }) => {
    const handleVersionChange = (event) => {
        setVersion(event.target.value);
    }
    return (
        <form>
        <p>Which version would you like</p>
        <label> 
        <input type="radio" value="Alan" checked={version === "Alan"} onChange={handleVersionChange} />
        Illustrator: Alan Lee, publication date 2014
        </label>
        <label>
            <input type="radio" value="Tolkien" checked={version === "Tolkien"} onChange={handleVersionChange} />
            Illustator: J.R.R Tolkien, publication date 2004
        </label>
        <label>
            <input type="radio"value="Tove" checked={version === "Tove"} onChange={handleVersionChange} />
            Illustrator: Tove Jansson, publication date 1961
        </label>
        </form> 
    )
}
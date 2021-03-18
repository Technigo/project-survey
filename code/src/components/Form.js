import React, { useState } from 'react';

const instruments = ['singing', 'piano', 'drums', 'guitarr', 'bass'];
const newInstruments = ['singing', 'piano', 'drums', 'guitarr', 'bass'];

const Form =() => {
    const [name, setName] = useState('');
    const [musician, setMusician] = useState('');
    const [instrument, setInstrument] = useState('');
    const [learnInstrument, setLearnInstrument] = useState('');
}






/*

const Form = () => {
    const [name, setName] = useState('');
    const [season, setSeason] = useState('');
    const [technology, setTechnology] = useState('');

    const onNameChange = (e) => {
        console.log(`Name: ${e.target.value}`);
        setName(e.target.value);
    };

    const onSeasonChange = (e) => {
        console.log(e);
        setSeason(e.target.value);
    };

    const onTechnologyChange = (e) => {
        console.log(`Technology: ${e.taget.value}`)
        setTechnology(e.target.value);
        
    };

    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    id="name" 
                    type="text" 
                    value={name}
                    onChange={() => onNameChange()}

                
                />
            </div>
            <div>
                <label htmlFor="season">Favourite season</label>
                <select id="season" onChange={onSeasonChange}>
                    <option>Winter</option>
                    <option>Spring</option>
                    <option>Summer</option>
                    <option>Fall</option>
                </select>
            </div>
            <div>
                <p>Favourite technology</p>
                <label htmlFor="html">HTML</label>
                <input 
                    name="technology" 
                    id="html" 
                    value="html"
                    type="radio" 
                    onChange={onTechnologyChange}
                />

                <label>CSS</label>
                <input 
                    name="technology" 
                    id="css"
                    value="css"
                    type="radio" 
                    onChange={onTechnologyChange}
                />
                <label>JavaScript</label>
                <input 
                    name="technology" 
                    id="js"
                    value="js"
                    type="radio" 
                    onChange={onTechnologyChange}
                />
                <label>React</label>
                <input 
                    type="radio" 
                    id="react"
                    value="react"
                    type="radio"
                    onChange={onTechnologyChange}
                />
            </div>
        </form>
    )
}

export default Form;

*/
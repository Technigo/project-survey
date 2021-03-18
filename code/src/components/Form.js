import React, { useState } from 'react';

const musicians = ['yes', 'no'];


const Form =() => {
    const [name, setName] = useState('');
    const [musician, setMusician] = useState('');
    const [instrument, setInstrument] = useState('');


const onNameChange = (change) => {
    setName(change.target.value);
};

const onMusicianChange = (change) => {
    setMusician(change.target.value);
};

const onInstrumentChange = (change) => {
    setInstrument(change.target.value);
};

    return (
        <form>
            <div className="name-question">
            <label htmlFor="name">Name:</label>
                <input 
                    id="name" 
                    type="text" 
                    value={name}
                    onChange={() => onNameChange()}
                />
            </div>
            <div className="musician-question">
                <p>Are you a musician?</p>
            <label htmlFor="musician">Yes</label>
                <input 
                    id="musician" 
                    type="radio" 
                    value={musician}
                    onChange={() => onMusicianChange()}
                />
                    <label htmlFor="musician">No</label>
                    <input 
                        id="musician" 
                        type="radio" 
                        value={musician}
                        onChange={() => onMusicianChange()}
                />
            </div>
            <div className="instrument-question">
                <label htmlFor="instrument">Which is your instrument?</label>
                <select id="instrument" onChange={onInstrumentChange}>
                    <option>Singing</option>
                    <option>Piano</option>
                    <option>Drums</option>
                    <option>Guitarr</option>
                    <option>Drums</option>
                </select>
            </div>
        </form>
    
    )}

    export default Form








 
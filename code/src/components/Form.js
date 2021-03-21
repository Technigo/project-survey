import React, { useState } from 'react';

import SummaryOfForm from './SummaryOfForm';


const Form =() => {
    const [name, setName] = useState('');
    const [musician, setMusician] = useState('');
    const [instrument, setInstrument] = useState('');
    const [showForm, setShowForm] = useState(true);
    console.log(name);


/*
const onMusicianChange = (e) => {
    setMusician(e.target.value);
};
 
const onInstrumentChange = (e) => {
    setInstrument(e.target.value);
};*/

    return (
        <>
        {showForm ?
            
        <form>
            <div className="name-question">
            <label htmlFor="name">Name:</label>
                <input 
                    id="name" 
                    type="text" 
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);}
                    }/>
            </div>
            <div className="musician-question">
                <p>Are you a musician?</p>
            <label htmlFor="musician">Yes</label>
                <input 
                    id="musician" 
                    type="radio" 
                    value="Yes"
                    onChange={(e) => {
                        setMusician(e.target.value);}
                    
                     } />
            <label htmlFor="musician">No</label>
                <input 
                    id="musician" 
                    type="radio" 
                    value="No"
                    onChange={(e) => {
                        setMusician(e.target.value);}
                      }  />
            </div>
            <div className="instrument-question">
                <label htmlFor="instrument">Which is your instrument?</label>
                <select id="instrument" onChange={(e) => {
                    setInstrument(e.target.value);
                    setTimeout(console.log(instrument), 1000)
                }
}>
                    <option>tomt värde</option>
                    <option>Singing</option>
                    <option>Piano</option>
                    <option>Drums</option>
                    <option>Guitarr</option>
                    <option>Bass</option>
                </select>
            </div>
            <button
            onClick= {() => {
                setShowForm(false)

            }}
            >Submit</button>
        </form>
    : <SummaryOfForm 
    nameData = {name}
    musicianData = {musician}
    instrumentData = {instrument}
/>}

    </>
    
    )}

    export default Form








 
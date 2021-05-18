import React, { useState } from 'react';

import SummaryOfForm from './SummaryOfForm';

import './Form.css'


const Form =() => {
    const [name, setName] = useState('');
    const [musician, setMusician] = useState('');
    const [instrument, setInstrument] = useState('');
    const [showForm, setShowForm] = useState(true);
    console.log(name);

    return (
        <div className="main-body">
        {showForm ?
            <div className="form-section">      
                <form>
                    <div className="name-question">
                    <label htmlFor="name" placeholder="Name">Name:</label>
                        <input 
                            id="name" 
                            type="text" 
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);}
                            }
                        />
                    </div>
                    <div className="musician-question">
                        <p>Are you a musician?</p>
                        <label htmlFor="musician">Yes</label>
                        <input 
                            name="musicianRadio"
                            id="musician" 
                            type="radio" 
                            value="I am a musician"
                            onChange={(e) => {
                                setMusician(e.target.value);}
                            } />
                        <label htmlFor="musician">No</label>
                        <input 
                            name="musicianRadio"
                            id="musician" 
                            type="radio" 
                            value="No, I'm not a musician"
                            onChange={(e) => {
                                setMusician(e.target.value);}
                            }  
                        />
                    </div>
                    <div className="instrument-question">
                        <label htmlFor="instrument">What instrument do you play?</label>
                        <select id="instrument" onChange={(e) => {
                            setInstrument(e.target.value);
                            setTimeout(console.log(instrument), 1000)
                        }}>
                            <option>Singing</option>
                            <option>Piano</option>
                            <option>Drums</option>
                            <option>Guitarr</option>
                            <option>Bass</option>
                            <option>I don't play any instrument</option>
                        </select>
                    </div>
                    <button
                    onClick= {() => {
                        setShowForm(false)
                    }}
                    >Submit</button>
                </form>
            </div>
                : <SummaryOfForm 
                    nameData = {name}
                    musicianData = {musician}
                    instrumentData = {instrument}
                />  
        }
    </div>
    )}

    export default Form








 
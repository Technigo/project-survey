import React, {useState} from 'react';
import 'styles/form.css';
import Input from './Input';
import Select from './Select';
import Radiobuttons from './Radiobuttons';
import Summary from './Summary';


const Form = () => {
    
    /* State hooks */
    const [name, setName] = useState('');
    const [numberOfPlants, setNumberOfPlants] = useState(''); 
    const [favoritePlant, setfavoritePlant] = useState('');
    const [showSummary, setShowSummary] = useState(false);
    
    /* Functions for handling input from form */ 
    const handleNameInput = inputName => {
        setName(inputName);
    };

    const handleSelect = selectNumber => {
        setNumberOfPlants(selectNumber);
    };

    const handleRadio = selectPlant => {
        setfavoritePlant(selectPlant);
    }
 
    const handleSubmit = event => {
        event.preventDefault();
        setShowSummary(true);
    }

    return (
    <section className='form-wrapper'>
        <h2 className='form-header'>Please fill in the form:</h2>

        {!showSummary ? (
        <form className='form' id='form' onSubmit={handleSubmit}>
            <Input name={name} onInputChange={handleNameInput}/>
            <Select number={numberOfPlants} onSelectChange={handleSelect}/>
            <Radiobuttons plant={favoritePlant} onSelectRadio={handleRadio}/>
            <button className='submit-button' tabIndex='0' type='submit'>Submit</button>
        </form>
        ) : (
        <Summary name={name} numberOfPlants={numberOfPlants} favoritePlant={favoritePlant} />
        )}
    </section>
        
    );
};

export default Form


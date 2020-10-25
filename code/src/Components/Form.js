import React, {useState} from "react";
import "styles/form.css";
import Input from "./Input";
import Select from "./Select";
import Radiobuttons from "./Radiobuttons";
import Summary from "./Summary";


const Form = () => {
    
    /* State hooks */
    const [name, setName] = useState('');
    const [numberOfPlants, setNumberOfPlants] = useState(''); 
    const [favoritePlant, setfavoritePlant] = useState('');
    const [showSummary, setShowSummary] = useState(false);
    
    /* Functions for handling input from form */ 
    const handleNameInput = (inputName) => {
        setName(inputName);
    };

    const handleSelect = (selectNumber) => {
        setNumberOfPlants(selectNumber);
    };

    const handleRadio = (selectPlant) => {
        setfavoritePlant(selectPlant);
    };
 
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowSummary(true);
    };

    return (
    <>
        {!showSummary ? (
        <form className="form" id="form" onSubmit={handleSubmit}>
            <Input name={name} onInputChange={handleNameInput}/>
            <Select numberOfPlants={numberOfPlants} onSelectChange={handleSelect}/>
            <Radiobuttons favoritePlant={favoritePlant} onSelectRadio={handleRadio}/>
            <button className="submit-button" tabIndex="0" type="submit">Submit</button>
        </form>
        ) : (         
        <Summary name={name} numberOfPlants={numberOfPlants} favoritePlant={favoritePlant}/>
        )}
    </>
    );
};    

export default Form;
import React, { useState } from 'react'
import SelectForm from './SelectForm.js'
import InputForm from './InputForm.js'
import CheckboxForm from './CheckboxForm.js'
import RadioForm from './RadioForm.js'

const Form = ({name, setName, location, setLocation, willTravel, setWillTravel, roles, setRoles, setSubmit}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const submitForm = (e) => {
        if (currentQuestion !== componentsArray.length - 1) {
            e.preventDefault();            
        } else {
            setSubmit(true);
        }        
     }


    const handleNextQuestion = () => {
        if (name !== '') {
            setCurrentQuestion(currentQuestion + 1);
            setErrorMessage('');
        } else {
            console.log('you must type your name');
            setErrorMessage('You cannot leave this field empty');
        }
    }
     //add validation that checks that values are not empty before clicking on to next question

     const componentsArray = [
        <InputForm 
            name={name}
            setName={setName}
            key={0}
        />,
        <SelectForm 
            location={location}
            setLocation={setLocation}
            key={1}
        />,
        <CheckboxForm 
            willTravel={willTravel}
            setWillTravel={setWillTravel}
            key={2}
        />,
        <RadioForm 
            roles={roles}
            setRoles={setRoles}
            key={3}
        />
     ]

    if (currentQuestion < componentsArray.length - 1) {
        return (
            <form onSubmit={submitForm}>
                <h1>Application form</h1>
                <h2>Developer and software engineering</h2>
                {errorMessage}
                {componentsArray[currentQuestion]}     

                <div className="next-and-submit-button-div">
                    <button className="next-button" type="button" onClick={handleNextQuestion}>Next question &#8618;</button>
                    <button className="submit-button" type="submit">Submit</button>
                </div>
            </form>
        )  
    } else {
        return (
            <form onSubmit={submitForm}>
            <h1>Application form</h1>
            <h2>Developer and software engineering</h2>
            {componentsArray[currentQuestion]}
    
            <button className="submit-button" type="submit">Submit</button>
        </form>
        )
    }

}

export default Form;
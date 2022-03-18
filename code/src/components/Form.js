import React, { useState } from 'react'
import SelectForm from './SelectForm.js'
import InputForm from './InputForm.js'
import CheckboxForm from './CheckboxForm.js'
import RadioForm from './RadioForm.js'

const Form = ({name, setName, location, setLocation, willTravel, setWillTravel, roles, setRoles, setSubmit}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

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
    ];

    const submitForm = (e) => {
        if (currentQuestion !== componentsArray.length - 1) {
            e.preventDefault();            
        } else {
            setSubmit(true);
        }        
     }

    const handleNextQuestionValidation = () => {
        if (currentQuestion === 0 && name !== '') {
            setCurrentQuestion(currentQuestion + 1);
            setErrorMessage('');  
        } else if (currentQuestion === 1 && location !== '') {
            setCurrentQuestion(currentQuestion + 1);
            setErrorMessage('');
        } else if (currentQuestion === 2) {
            setCurrentQuestion(currentQuestion + 1);
            setErrorMessage('');
        } else {
            setErrorMessage('You cannot leave this field empty');
        }
    }

    const progressBarArray = [
        {bgcolor: 'lightgreen', width: '25%' },
        {bgcolor: 'lightgreen', width: '50%' },
        {bgcolor: 'lightgreen', width: '75%' },
        {bgcolor: 'lightgreen', width: '100%'},

    ];

    const totalNumOfQuestions = componentsArray.length;
    return (
        <form onSubmit={submitForm}>
            <h1>Application form</h1>
            <h2>Developer and software engineering</h2>
            <p>Question {currentQuestion + 1} out of {totalNumOfQuestions}</p>

            <div style={{width: '200px', display: 'flex', backgroundColor: 'lightgrey', marginBottom: '5vh'}}>
            {progressBarArray.map((fill, index) => {
                if(index === 0 && currentQuestion === 0) {
                    return (
                        <div style={{width: `${fill.width}`, backgroundColor: `${fill.bgcolor}`}}>{fill.width}</div>
                    )
            } else if (index === 1 && currentQuestion === 1) {
                    return (
                        <div style={{width: `${fill.width}`, backgroundColor: `${fill.bgcolor}`}}>{fill.width}</div>
                    )
            } else if (index === 2 && currentQuestion === 2) {
                    return (
                        <div style={{width: `${fill.width}`, backgroundColor: `${fill.bgcolor}`}}>{fill.width}</div>
                    )
            } else if (index === 3 && currentQuestion === 3) {
                    return (
                        <div style={{width: `${fill.width}`, backgroundColor: `${fill.bgcolor}`}}>{fill.width}</div>
                    )
            } else {
                    return (
                        <div></div>
                    )
            }
            })}                
            </div>
            
            <span style={{color: 'darkred', fontSize: '12px'}}>{errorMessage}</span>
            {componentsArray[currentQuestion]}     

            <div className="next-and-submit-button-div">
                {(currentQuestion < componentsArray.length - 1) ?  
                <>
                <button className="next-button" type="button" onClick={handleNextQuestionValidation}>Next question &#8618;</button>
                <button className="submit-button" type="submit">Submit</button>
                </>
                :
                <>
                <button className="submit-button" type="submit">Submit</button>
                </>
                }
            </div>
        </form>
    )  
} 

export default Form;
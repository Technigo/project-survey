/* eslint-disable linebreak-style */
/* eslint-disable */

import React, { useState } from 'react'

import FormQuestions from 'components/FormQuestions'
import Checkboxes from 'components/Checkboxes'
import Summary from 'components/Summary'

const genderGroups = ["male", "female", "other"]


const Form = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [gender, setGender] = useState('')
    const [symptom, setSymptom] = useState('')
    const [IsSubmited, setIsSubmited] = useState(false)
    const [checkboxGroup, setCheckboxGroup] = useState([])



    const onFnameChange = (e) => {
        console.log(e.target.value)
        setFname(e.target.value)
    }

    const onLnameChange = (e) => {
        console.log(e.target.value)
        setLname(e.target.value)
    }

    const onGenderChange = (e) => {
        console.log(e.target.value)
        setGender(e.target.value)
    }

    const onSymptomChange = (e) => {
        console.log("form question", e.target.value)

        setSymptom(e.target.value)
    } 

    

    const onCheckboxToggle = (checkBoxValue) => {
        if (checkboxGroup.includes(checkBoxValue)) {
            setCheckboxGroup(checkboxGroup.filter(item => item !== checkBoxValue))
        } else {
            setCheckboxGroup([checkBoxValue, ...checkboxGroup])
        }
    }    




    const isSurveyComplete = () => {
        if (fname === '') {
            return false
        }

        if (lname === '') {
            return false
        }

        if (gender === '') {
            return false
        }

        if (symptom === '') {
            return false
        }    
        
        if (checkboxGroup.length === 0) {
            return false
        }

        return true
    }
    
    if (isSurveyComplete()) {
        console.log("completed survey")
        
            
    }
    if (IsSubmited === false) {
        return (
            <form onSubmit = {(event) => event.preventDefault()}>
                <div>
                    <label htmlFor="fname">First Name</label>
                    <input
                        id="fname"
                        type="text"
                        value={fname}
                        onChange={onFnameChange}
                        
                    />   
    
                </div>
    
                <div>
                    <label htmlFor="lname">Last Name</label>
                    <input
                        id="lname"
                        type="text"
                        value={lname}
                        onChange={onLnameChange}
                    />    
                </div>
    
                Gender:
                {genderGroups.map((group) => (
                    <label key={group}>
                        <input
                            type="radio"
                            value={group}
                            onChange={onGenderChange}
                            checked={gender === group}
                            
                        />
                        {group}    
                    </label>
    
                ))}
                
                <FormQuestions 
                    onSymptomChange={onSymptomChange}
                    symptom={symptom} /> 
                
                <Checkboxes
                    onCheckboxToggle={onCheckboxToggle}
                    checkboxGroup={checkboxGroup}
                    />
                

                        


    
                <div>
                    <input
                        type="submit"
                        value="Submit"
                        disabled={!isSurveyComplete()}
                        onClick= {
                            () => setIsSubmited(true)
                                
                            
                        }
                        
                    
                    />
                   
                </div>
    
    
            </form>
        )
    
    } else {
        return (
            <Summary
            fname={fname}
            lname={lname}
            gender={gender}
            symptom={symptom}
            />
        ) 
    }
    
    
}





export default Form
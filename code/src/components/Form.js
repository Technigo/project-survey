/* eslint-disable linebreak-style */
/* eslint-disable */

import React, { useState } from 'react'

import FormQuestions from 'components/FormQuestions'

const genderGroups = ["male", "female", "other"]


const Form = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [gender, setGender] = useState('')




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

        

        return true
    }
    
    if (isSurveyComplete()) {
        console.log("completed survey")
        
            
    }

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
            
            <FormQuestions />

            <div>
                <input
                    type="submit"
                    value="Submit"
                    disabled={!isSurveyComplete()}
                
                />
               
            </div>


        </form>
    )

    
}





export default Form
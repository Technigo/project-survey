import React from 'react'
import SelectForm from './SelectForm.js'
import InputForm from './InputForm.js'
import CheckboxForm from './CheckboxForm.js'
import RadioForm from './RadioForm.js'

const Form = ({name, setName, location, setLocation, willTravel, setWillTravel, roles, setRoles, setSubmit}) => {

    const submitForm = () => {
        setSubmit(true);
     }

    return (
    <form onSubmit={submitForm}>
        <h1>Application form</h1>
        <h2>Developer and software engineering</h2>
        <InputForm 
            name={name}
            setName={setName}
        />

        <SelectForm 
            location={location}
            setLocation={setLocation}
        />

        <CheckboxForm 
            willTravel={willTravel}
            setWillTravel={setWillTravel}
        />

        <RadioForm 
            roles={roles}
            setRoles={setRoles}
        />

        <button className="submit-button" type="submit">Submit</button>
    </form>
    )
}

export default Form;
import React, { useState } from 'react'

//The Forms components 
import { FormHeading } from './components/FormHeading'
import { NameInput } from './components/NameInput'
import { BrandSelectOption } from './components/BrandSelectOption'
import {FrequencyRadioOption } from './components/FrequencyRadioOption'
import { SubmitButton } from './components/SubmitButton'
import { Summary }  from './components/Summary'

const frequencies = ['Daily', 'Weekly', 'Monthly', 'Never']

export const Form = () => {
    //useState gathered here and and passed to child components as props
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [frequency, setFrequency] = useState('')
    const [showSummary, setShowSummary] = useState(false)

    //Function to prevent the page to rerender itself
    const handleSubmit = (e) => {
        e.preventDefault()
        setShowSummary(true)
    }

    const isFormComplete = () => {

        //Fail fast way
        //If "this" is not a valid value, return false
        if (name === ''){
            return false
        }
        if (brand === ''){
            return false
        }
        if (frequency === ''){
            return false
        }
        return true
    }

    if (isFormComplete()) {
        console.log('this is true')
    }

    return(
        
        <>
            <form onSubmit={handleSubmit}>
                <FormHeading 
                    formTitle='We are all ears.'
                    formText='We want to know what your sneaker deal is. Are you yay or nay? Take this 5 minute survey to help us understand your needs. You can tell us how you really feel!'
                />
                <NameInput 
                    name={name} 
                    setName={setName}
                />
                <BrandSelectOption 
                        brand={brand} 
                        setBrand={setBrand} 
                />
                <div>
                    <p>How Often Do You Wear Sneakers?</p>
                    {
                        frequencies.map((frequency) => {
                            return <FrequencyRadioOption
                                    key={frequency}
                                    frequencyValue={frequency} 
                                    setFrequency={setFrequency}
                                    />
                        })
                    }
                </div>
                <SubmitButton />
            </form>
            <Summary name={name} brand={brand} frequency={frequency}/>
        </>
    )
}



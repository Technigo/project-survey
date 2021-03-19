import React, { useState } from 'react'

import { FormHeading } from './components/FormHeading'
import { NameInput } from './components/NameInput'
import { BrandSelectOption } from './components/BrandSelectOption'
import {FrequencyRadioOption } from './components/FrequencyRadioOption'


const frequencies = ["Daily", "Weekly", "Monthly", "Never"]

export const Form = () => {
    //States
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [frequency, setFrequency] = useState('')

    return(
        <form>
            <FormHeading 
                formTitle="We're all ears."
                formText="We want to know what your sneaker deal is. Are you yay or nay? Take this 5 minute survey to help us understand your needs. You can tell us how you really feel!"
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
            {/* writes out the value chosen */}
            <div>{frequency}</div>
        </form>
    )
}



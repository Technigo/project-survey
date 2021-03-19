import React, { useState } from 'react'

import { FormHeading } from './FormHeading'
import {FrequencyRadioOption } from './FrequencyRadioOption'

const frequencies = ["Daily", "Weekly", "Monthly", "Never"]

export const Form = () => {
    //States
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')
    const [frequency, setFrequency] = useState('')

    //Functions to change value of state
    const onNameChange = (e) => {
        console.log(`Name: ${e.target.value}`)
        setName(e.target.value)
    }

    const onBrandChange = (e) => {
        console.log(`Brand: ${e.target.value}`)
        setBrand(e.target.value)
    }

    return(
        <form>
            <FormHeading 
                formTitle="We're all ears."
                formText="We are interested of your sneaker experience. Take this 5 minute survey to help us understand your needs. You can tell us how you really feel!"
            />
            <div>
                <label htmlFor="name">What is Your Name: </label>
                <input 
                    id="name" 
                    type="text" 
                    value={name} 
                    onChange={onNameChange}
                />
            </div>
            <div>
                <label htmlFor="brand">Favourite Sneaker Brand: </label>
                <select id="brand" value={brand} onChange={onBrandChange}>
                    <option disabled></option>
                    <option>Nike</option>
                    <option>Jordan</option>
                    <option>Adidas</option>
                    <option>Reebok</option>
                    <option>New Balance</option>
                    <option>Karhu</option>
                </select>
            </div>
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



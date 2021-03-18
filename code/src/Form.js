import React, { useState } from 'react'

import { FormHeading } from './FormHeading'

export const Form = () => {
    const [name, setName] = useState('')
    const [brand, setBrand] = useState('')

    const onNameChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const onBrandChange = (e) => {
        console.log(e.target.value)
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
                <input id="name" type="text" value={name} onChange={onNameChange}/>
            </div>
            <div>
                <label htmlFor="brand">Choose 1 Favourite Sneaker Brand: </label>
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
                <label htmlFor="daily">Daily</label>
                <input id="daily" type="radio"/>
                <label htmlFor="weekly">Weekly</label>
                <input id="weekly" type="radio"/>
                <label htmlFor="monthly">Monthly</label>
                <input id="monthly" type="radio"/>
                <label htmlFor="never">Never</label>
                <input id="never" type="radio"/>
            </div>
        </form>
    )
}



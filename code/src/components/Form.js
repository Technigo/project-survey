import React from 'react'
import OrderBtn from './OrderBtn'
import SelectSize from './SelectSize'
import Name from './Name'
import Email from './Email'
import Hero from './HeroImage'
import Phone from './Phone'
import Amount from './Amount'
import Checkbox from './Checkbox'
import Radio from './Radio'

const Test = () => {
    return (
        <form action="http://httpbin.org/anything" method="POST">
                <Hero />
                <div className="form">
                    <div className="form-container">
                    <div className="form-section">
                            <Radio />
                            <SelectSize />
                            <Amount />
                            <Name />
                            <Email />
                            <Phone />
                            <Checkbox />
                            <OrderBtn />
                    </div>
                    </div>
                </div>
            </form>
    )
}

export default Test
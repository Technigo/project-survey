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
import Range from './RangeSlider'

const Test = () => {
    return (
        <form action="http://httpbin.org/anything" method="POST">
                <Hero />
                <div>
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
                            <Range />
                            <OrderBtn />
                        </div>
                    </div>
                </div>
                <div><h1>TEST</h1></div> 
                </div>
            </form>
    )
}

export default Test
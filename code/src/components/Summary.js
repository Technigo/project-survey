import React, { useState } from 'react'

import Dropdown from './Dropdown'
import DropdownTwo from './DropdownTwo'
import Radiobutton from './Radiobutton'
import Header from './Header'
import Name from './Name'
import OrderResult from './OrderResult'

const Summary = () => {


    const [name, setName] = useState("")
    const [dropdown, setDropdown] = useState("")
    const [dropdownTwo, setDropdownTwo] = useState("")
    const [radiobutton, setRadiobutton] = useState("")
    const [orderResult, setOrderResult] = useState()
    const [step, setStep] = useState(1)

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleDropdown = (event) => {
        setDropdown(event.target.value)
    }

    const handleDropdownTwo = (event) => {
        setDropdownTwo(event.target.value)
    }

    const handleRadiobutton = (event) => {
        setRadiobutton(event.target.value)
    }

    const handleOrderResult = (event) => {
        setOrderResult(event.target.value)
    }

    const onStepChange = (event) => {
        event.preventDefault()
        setStep(step + 1)
    }

    return (
        <div className="container">
            <div>
                {step === 1 &&
                    <Header onStepChange={onStepChange}/>}

                {step === 1 && (
                    <Name
                        name={name}
                        nameInputChange={handleName}
                        onStepChange={onStepChange}
                    />
                )}

                {step === 1 && (
                    <Dropdown
                        dropdown={dropdown}
                        selectChange={handleDropdown}
                        onStepChange={onStepChange}
                    />
                )}

                {step === 1 && (
                    <DropdownTwo
                        dropdownTwo={dropdownTwo}
                        selectTwoChange={handleDropdownTwo}
                        onStepChange={onStepChange}
                    />
                )}

                {step === 1 && (
                    <Radiobutton
                        radiobutton={radiobutton}
                        radioChange={handleRadiobutton}
                        onStepChange={onStepChange}
                    />
                )}

                {step === 2 && (
                    <OrderResult
                    name={name}
                    dropdown={dropdown}
                    dropdownTwo={dropdownTwo}
                    radiobutton={radiobutton}
                    // OrderResult={handleOrderResult}
                    //     orderResult={orderResult}
                    //     onStepChange={onStepChange}
                    />
                )}
            </div>
        </div>
    )
}

export default Summary
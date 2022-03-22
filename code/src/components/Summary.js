import React, { useState } from 'react'

import Dropdown from './Dropdown'
import DropdownTwo from './DropdownTwo'
import Radiobutton from './Radiobutton'
import Header from './Header'
import Name from './Name'
import OrderResult from './OrderResult'

const Summary = () => {


    const [username, setUsername] = useState("")
    const [dropdown, setDropdown] = useState("")
    const [dropdownTwo, setDropdownTwo] = useState("")
    const [radiobutton, setRadiobutton] = useState("")
    const [orderResult, setOrderResult] = useState()
    const [step, setStep] = useState(1)

    const handleName = (event) => {
        setUsername(event.target.value)
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

                {step === 2 && (
                    <Name
                        username={username}
                        nameInputChange={handleDropdown}
                        onStepChange={onStepChange}
                    />
                )}

                {step === 3 && (
                    <Dropdown
                        dropdown={dropdown}
                        selectChange={handleName}
                        onStepChange={onStepChange}
                    />
                )}

                {step === 4 && (
                    <DropdownTwo
                        dropdownTwo={dropdownTwo}
                        selectTwoChange={handleDropdownTwo}
                        onStepChange={onStepChange}
                    />
                )}

                {step === 5 && (
                    <Radiobutton
                        radiobutton={radiobutton}
                        radioChange={handleRadiobutton}
                        onStepChange={onStepChange}
                        OrderResult={handleOrderResult}
                    />
                )}

                {step === 6 && (
                    <OrderResult
                    username={username}
                    dropdown={dropdown}
                    dropdownTwo={dropdownTwo}
                    radiobutton={radiobutton}
                    orderResult={orderResult}
                    />
                )}
            </div>
        </div>
    )
}

export default Summary
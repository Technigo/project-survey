import React, {useState} from 'react'

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
    // Nu testar jagss
    const [sumHidden, setsumHidden] = useState(true);
    const [Size, setSize] = useState("");
    const [myamount, setmyamount] = useState("");
    const [Color, setColor] = useState();
    const [myname, setmyname] = useState("");
    const [myemail, setmyemail] = useState("");
    const [wantsNewsletter, setwantsNewsletter] = useState("");
    const [myphone, setmyphone] = useState("");
    const [Rng, setRng] = useState("No Opinion"); //50
    console.log(myphone) // Ska bort
    console.log(wantsNewsletter) // Ska bort
    console.log(myemail) // Ska bort
    console.log(myname) // Ska bort
    console.log(Color) // Ska bort
    console.log(myamount) // Ska bort
    console.log(Size) // Ska bort

    const SelectedRange = (e) => {
        console.log(e.target)
        setRng(e.target.value) // Tog bort .value
    }

    const SelectPhoneNumber = (e) => {
        console.log(e.target.value)
        setmyphone(e.target.value)
    }

    const SelectCheckbox = (e) => {
        console.log(e.target.value)
        setwantsNewsletter(e.target.value)
    }

    const SelectEmail = (e) => {
        console.log(e.target.value)
        setmyemail(e.target.value)
    } 

    const SelectName = (e) => {
        console.log(e.target.value)
        setmyname(e.target.value)
    }

    const SelectAmount = (e) => {
        console.log(e.target.value)
        setmyamount(e.target.value)
    }

    const SelectS = (e) => {
        console.log(e.target.value)
        setSize(e.target.value)
    }

    const SelectColor = (e) => {
        console.log(e.target.value)
        setColor(e.target.value)
    }

    const OnSumChange = (event) => {
        event.preventDefault()
        setsumHidden (false)


    }

    if (sumHidden === true) {

    
    return (
        <form onSubmit={OnSumChange}>
                <Hero />
                <div>
                <div className="form">
                    <div className="form-container">
                        <div className="form-section">
                            <Radio colorSelected = {Color} IselectColor = {SelectColor} />
                            <SelectSize sizeSelected = {Size} IselectSize = {SelectS} />
                            <Amount choosedAmount = {myamount} IselectAmount= {SelectAmount} />
                            <Name nameInput = {myname} IselectName = {SelectName} />
                            <Email emailInput = {myemail} IselectEmail = {SelectEmail} />
                            <Phone phoneInput={myphone} IselectPhone= {SelectPhoneNumber} />
                            <Checkbox checkboxInput = {wantsNewsletter} IselectCheckbox = {SelectCheckbox} />
                            <Range decideRange={Rng} IselectRange = {SelectedRange} />
                            <OrderBtn />
                        </div>
                    </div>
                </div>
                 
                </div>
            </form>)
        } else {
        return ( 
            <div className="sum-container">
                <div className="sum-box">
                    <div className="sum">
                        <h4>Order Summary</h4>
                        <p>My name: <span>{myname}</span></p>
                        <p>My Email: <span>{myemail}</span></p>
                        <p>My Phone number: <span>{myphone}</span></p>
                        <p>Selected product: <span>{Color}</span></p>
                        <p>Selected Size: <span>{Size}</span></p>
                        <p>Amount of item: <span>{myamount}</span></p>
                        <p>Subscribe?: <span>{wantsNewsletter}</span></p>                        
                        <p>My UX level: <span>{Rng}</span></p>
                        <p>Thank you for your order, we will return to you as soon as possible with payment and cargo details!</p>
                    </div>
                </div>
            </div>
        )
            
            }
}

export default Test
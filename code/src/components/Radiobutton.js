import React, { useState } from 'react'



const Forms = (props) => {

    const [order, setOrder] = useState('')

    return (
        <div className="container radiobutton-container">
            <h2>Would you like to receive our digital newsletter once a month?</h2>
            <form className="radio-buttons">
                <label className="label-radio">
                    Yes!
                    <input
                        className="radio-button"
                        type="radio"
                        name="radiobtn"
                        required
                    />
                    <span className="checkmark"></span>
                </label>

                <label className="label-radio">
                    No no.
                    <input
                        className="radio-button"
                        type="radio"
                        name="radiobtn"
                        required
                    />
                    <span className="checkmark"></span>
                </label>

                {/* <label>
                12 issues
            <input 
            type="radio"
            name="radiobtn"
            required
            />
           </label> */}
            </form>

            <p>{order}</p>

            <div className="button-container">
                <button onClick={() => { setOrder('Thank you for your purchase') }}>Place order</button>
            </div>
        </div>
    )
}

export default Forms
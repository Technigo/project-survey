import React, { useState } from 'react'



const Forms = (props) => {
    const { radiobutton, radioChange, onStepChange } = props

    const [order, setOrder] = useState('')

    return (
        <div onSubmit={onStepChange} className="container radiobutton-container">
            <h2>Would you like to receive our digital newsletter once a month?</h2>
            <form className="radio-buttons">
                <label className="label-radio">
                    Yes!
                    <input
                        className="radio-button"
                        type="radio"
                        name="radiobtn"
                        value={radiobutton}
                        required
                        onChange={radioChange}
                    />
                    <span className="checkmark"></span>
                </label>

                <label className="label-radio">
                    No no.
                    <input
                        className="radio-button"
                        type="radio"
                        name="radiobtn"
                        value={radiobutton}
                        required
                        onChange={radioChange}
                    />
                    <span className="checkmark"></span>
                </label>

            <p>{order}</p>

            <div className="button-container">
                <button type="submit" onClick={() => { setOrder('Thank you for your purchase') }}>Place order</button>
            </div>
            </form>
        </div>
    )
}

export default Forms
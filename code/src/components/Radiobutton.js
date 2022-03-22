import React, { useState } from 'react'



const Forms = (props) => {
    const { radiobutton, radioChange, onStepChange } = props

    const [order, setOrder] = useState('')

    return (
        <div className="container">
            <section className="radiobutton-container">
            <label className="label-name">Would you like to receive our digital newsletter once a month?</label>
            <form onSubmit={onStepChange} className="radio-buttons">
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

            <p className="error-message">{order}</p>

            <div className="button-container">
                <button type="submit" onClick={() => { setOrder('Please select one') }}>Place order</button>
            </div>
            </form>
            </section>
        </div>
    )
}

export default Forms
import React from 'react'

const Dropdown = (props) => {
    const { dropdown, selectChange, onStepChange } = props

    
    return (
        <div className="container">
            <section className="dropdown-container">
            <label className="label-name">What welcome gift would you like?</label>
            <form onSubmit={onStepChange}>
                <select
                className="dropdown"
                    name="where"
                    required
                    placeholder="this"
                    value={dropdown}
                    onChange={selectChange}
                >
                    <option selected disabled >Select one</option>
                    <option >Lottery Tickets</option>
                    <option >Book of the month</option>
                    <option >Donate 10€ to charity</option>
                </select>

            <div className="button-container">
            <button  type="submit">Next</button>
            </div>
            </form>
          </section>
        </div>

    )
}

export default Dropdown
import React from 'react'

const Dropdown = (props) => {
    const { dropdown, selectChange, onStepChange } = props

    return (
        <div className="container dropdown-container">
            <h2>What welcome gift would you like?</h2>
            <form onSubmit={onStepChange}>
                <select
                className="dropdown"
                    name="where"
                    required
                    placeholder="this"
                    value={dropdown}
                    onChange={selectChange}
                >
                    <option isDisabled={true}>Select one</option>
                    <option >Lottery Tickets</option>
                    <option >Book of the month</option>
                    <option >Donate 10€ to charity</option>
                </select>

            <div className="button-container">
            <button  type="submit">Next</button>
            </div>
            </form>

        </div>

    )
}

export default Dropdown
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
                    onChange={selectChange}
                >
                    <option disabled={true}>Select one</option>
                    <option value={dropdown}>Lottery Tickets</option>
                    <option value={dropdown}>Book</option>
                    <option value={dropdown}>Donate 10€ to charity</option>
                </select>

            <div className="button-container">
            <button  type="submit">Next</button>
            </div>
            </form>

        </div>

    )
}

export default Dropdown
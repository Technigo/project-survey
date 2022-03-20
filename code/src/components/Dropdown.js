import React from 'react'

const Dropdown = (props) => {
    const { dropdown, selectChange, onStepChange } = props

    return (
        <div onSubmit={onStepChange} className="container dropdown-container">
            <h2>What welcome gift would you like?</h2>
            <form>
                <select
                className="dropdown"
                    name="where"
                    required
                    placeholder="this"
                    onChange={selectChange}
                >
                    <option selected disabled>Select one</option>
                    <option value={dropdown}>Lottery Tickets</option>
                    <option value={dropdown}>Book</option>
                    <option value={dropdown}>Donate 10€ to charity</option>
                </select>
            </form>

            <div className="button-container">
            <button  type="submit">Next</button>
            </div>

        </div>

    )
}

export default Dropdown
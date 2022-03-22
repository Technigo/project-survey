import React from 'react'

const DropdownTwo = (props) => {
    const { dropdownTwo, selectTwoChange, onStepChange } = props

    return (
        <div className="container dropdown-two-container">
            <h2>Number of issues</h2>
            <form onSubmit={onStepChange}>
                <select
                    className="dropdown"
                    name="issues"
                    required
                    value={dropdownTwo}
                    onChange={selectTwoChange}
                >
                    <option selected disabled>Select one</option>
                    <option id="three">3 issues for 12€</option>
                    <option id="six">6 issues for 18€</option>
                    <option id="twelve">10 issues for 30€</option>
                </select>

                <div className="button-container">
                    <button type="submit">Next</button>
                </div>
            </form>
        </div>
    )
}

export default DropdownTwo
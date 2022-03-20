import React from 'react'

const DropdownTwo = (props) => {
    const { dropdownTwo, selectTwoChange, onStepChange} = props

    return (
        <div className="container dropdown-two-container">
            <h2>Number of issues</h2>
            <form onSubmit={onStepChange}>
                <select
                className="dropdown"
                    name="issues"
                    required
                    onChange={selectTwoChange}
                    >
                    <option selected disabled>Select one</option>
                    <option value={dropdownTwo}>3 issues for 12€</option>
                    <option value={dropdownTwo}>6 issues for 18€</option>
                    <option value={dropdownTwo}>10 issues 30€</option>
                </select>
            </form>

            <div className="button-container">
            <button  type="submit">Next</button>
            </div>
        </div>
    )
}

export default DropdownTwo